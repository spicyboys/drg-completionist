import { liveQuery } from 'dexie';
import { useMemo, useState } from 'react';
import usePromise from 'react-promise-suspense';
import { useSubscription, Subscription } from 'use-subscription';

export default function useSuspendedLiveQuery<T>(
  querier: () => Promise<T>,
  dependencies: unknown[]
): T {
  const initialData = usePromise(querier, dependencies);
  const [queryData, setQueryData] = useState(initialData);
  const subscription = useMemo(
    (): Subscription<T> => {
      const observable = liveQuery(querier);
      let currentValue = queryData;
      return {
        getCurrentValue: () => currentValue,
        subscribe: (callback) => {
          const subscription = observable.subscribe((nextValue) => {
            currentValue = nextValue;
            setQueryData(nextValue);
            callback();
          });
          return () => subscription.unsubscribe();
        },
      };
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies
  );

  const value = useSubscription(subscription);
  return value;
}
