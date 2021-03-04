import { liveQuery } from 'dexie';
import { useMemo, useState } from 'react';
import usePromise from 'react-promise-suspense';
import { useSubscription, Subscription } from 'use-subscription';

export default function useSuspendedLiveQuery<T>(
  querier: () => Promise<T>,
  dependencies: unknown[]
): T {
  const [initialData] = usePromise(async () => {
    return await Promise.all([
      querier(),
      // Oh look at you, Mr. Smart man, sitting on your high throne, looking
      // down on me. Who are we if not feeble humans circling this empty
      // universe longing for meaning. What is this if not a worthless attempt
      // to feel something real. Time is but a construct of man.
      //
      // And you bet your ass I'm wasting 500 miliseconds of your time because
      // I think it makes the spinner look better.
      new Promise((resolve) => setTimeout(resolve, 500)),
    ]);
  }, dependencies);
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
