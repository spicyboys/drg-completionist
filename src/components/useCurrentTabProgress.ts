import { useWorker } from '@koale/useworker';
import { useEffect, useRef, useState } from 'react';
import { serialize } from 'serializr';
import { TabName } from 'App';
import { Frameworks } from 'data/frameworks';
import { Overclocks } from 'data/overclocks';
import { schema } from 'store/usePersistedStore';
import useStore from 'store/useStore';
import { MinerWeapons } from 'utils/weapons';
import calculateTabProgress from './calculateTabProgress';

type TabProgress = {
  progress: number;
  partialProgress: number | null;
};

export default function useCurrentTabProgress(
  currentTab: TabName
): TabProgress {
  const [store] = useStore();
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState<TabProgress>({
    progress: 0,
    partialProgress: null,
  });

  const [calculateTabProgressWorker] = useWorker(calculateTabProgress);

  const previousStore = useRef<string | null>(null);
  const previousTab = useRef<TabName | null>(null);
  useEffect(() => {
    if (isRunning) {
      // If the worker is currently running, we can't start it again.
      return;
    }

    // Deep object comparison with complex data structues requires us to
    // serialize the store and stringify it
    const serializedStore = JSON.stringify(serialize(schema, store));

    if (
      previousStore.current === serializedStore &&
      previousTab.current === currentTab
    ) {
      // We've already processed the current set of data
      return;
    }

    setIsRunning(true);
    calculateTabProgressWorker(
      currentTab,
      store,
      Frameworks,
      Overclocks,
      MinerWeapons
    )
      .then((tabProgress) => {
        previousStore.current = serializedStore;
        previousTab.current = currentTab;
        setProgress(tabProgress);
      })
      .finally(() => setIsRunning(false));
  }, [calculateTabProgressWorker, isRunning, currentTab, store]);

  return progress;
}
