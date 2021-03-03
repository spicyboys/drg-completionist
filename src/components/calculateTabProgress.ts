import type { TabName } from 'App';
import type { Frameworks } from 'data/frameworks';
import type { Overclocks } from 'data/overclocks';
import type { State } from 'store/state';
import type { MinerWeapons } from 'utils/weapons';

/**
 * Tab progress calculation is a lot of nonsense object and array manipulation,
 * and I want to get it off the critical render path. This is a standalone
 * function with no dependencies that we can call from a service worker in order
 * to accomplish that.
 */
export default function calculateTabProgress(
  currentTab: TabName,
  store: State,
  allFrameworks: typeof Frameworks,
  allOverclocks: typeof Overclocks,
  allWeapons: typeof MinerWeapons
): { progress: number; partialProgress: number | null } {
  let progress,
    partialProgress = null;
  switch (currentTab) {
    case 'overclocks': {
      progress = Math.round(
        (Array.from(store.overclocks.values()).reduce((p, c) => p + c.size, 0) /
          Object.values(allOverclocks)
            .flatMap((w) => Object.values(w))
            .flat().length) *
          100
      );
      partialProgress = Math.round(
        (Array.from(store.unforgedOverclocks.values()).reduce(
          (p, c) => p + c.size,
          0
        ) /
          Object.values(allOverclocks)
            .flatMap((w) => Object.values(w))
            .flat().length) *
          100
      );
      break;
    }
    case 'frameworks': {
      progress = Math.round(
        (Array.from(store.frameworks.values()).reduce((p, c) => p + c.size, 0) /
          (allFrameworks.length *
            Object.values(allWeapons).reduce((p, c) => p + c.length, 0))) *
          100
      );
      break;
    }
  }
  return { progress, partialProgress };
}
