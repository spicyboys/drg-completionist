import { TabName } from 'App';
import { Frameworks } from 'data/frameworks';
import { Overclocks } from 'data/overclocks';
import { State } from 'store/state';
import { MinerWeapons } from 'utils/weapons';

/**
 * Tab progress calculation is a lot of nonsense object and array manipulation,
 * and I want to get it off the critical render path. To do so, we call this
 * function from a webworker, which has the obnoxious limitation of not allowing
 * imports. Now, you may be thinking to yourself, "Robert, there's a list of
 * imports right at the top of this file. What are you on about?" Well, since
 * we're only using those imports in type positions (the arguments), they're
 * getting removed by the compiler and they're not a real issue. However it does
 * still mean passing in all of these things as arguments to the function. Well
 * now you know why.
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
