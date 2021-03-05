import { liveQuery } from 'dexie';
import deepEqual from 'fast-deep-equal';
import { useMemo } from 'react';
import { useSubscription, Subscription } from 'use-subscription';

interface PromiseCache {
  promise?: Promise<void>;
  dependencies: Array<unknown>;
  error?: unknown;
  response?: unknown;
}

const promiseCaches: PromiseCache[] = [];

/**
 * A version of Dexie's `useLiveQuery` that suspendes while it waits for the
 * query to return once before subscribing to the query for updates. This also
 * caches the responses so re-mounting a component will be able to use cached
 * data while waiting for the query to re-execute, preventing excessive null
 * states.
 */
export default function useSuspendedLiveQuery<T>(
  querier: () => Promise<T>,
  dependencies: unknown[]
): T {
  // Check to see if this promise is anywhere in our cache. If it is, either
  // propogate the error if there was one, get the cache entry if it's finished
  // or rethrow the promise to continue suspending
  let cacheEntry: PromiseCache | undefined;
  for (const promiseCache of promiseCaches) {
    if (deepEqual(dependencies, promiseCache.dependencies)) {
      if ('error' in promiseCache) {
        throw promiseCache.error;
      } else if ('response' in promiseCache) {
        cacheEntry = promiseCache;
        break;
      } else {
        throw promiseCache.promise;
      }
    }
  }

  // This is the first time we've encountered this promise, so kick it off
  // and throw it in the cache
  if (cacheEntry === undefined) {
    const promiseCache: PromiseCache = {
      promise: querier()
        .then((response) => {
          promiseCache.response = response;
        })
        .catch((e) => {
          promiseCache.error = e;
        }),
      dependencies,
    };
    promiseCaches.push(promiseCache);
    throw promiseCache.promise;
  }

  // Create a subscription to the query
  const subscription = useMemo(
    (): Subscription<T> => {
      // Create the live query with dexie that we'll create the subscription to
      const observable = liveQuery(querier);
      // The initial value is the response from the promise cache, which was
      // either the first value we suspended for or the last value we received
      // before unsubscribing
      let currentValue = (cacheEntry as PromiseCache).response as T;
      return {
        getCurrentValue: () => currentValue,
        subscribe: (callback) => {
          const subscription = observable.subscribe((nextValue) => {
            // Update the cache entry to the new value so we don't show the
            // stale data from the first render prior to any subsequent updates
            // on re-mount
            (cacheEntry as PromiseCache).response = nextValue;

            // Update the current value
            currentValue = nextValue;

            // Inform the subscription we have new data
            callback();
          });
          return () => subscription.unsubscribe();
        },
      };
    },

    // We **only** want to resubscribe if the dependencies update and not any
    // intermediary objects, so ignore all other inputs
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies
  );

  const value = useSubscription(subscription);
  return value;
}
