import { useSyncExternalStore } from "react";

type MediaQueryStore = {
  getSnapshot: () => boolean;
  getServerSnapshot: () => boolean;
  subscribe: (listener: () => void) => () => void;
};

const stores = new Map<string, MediaQueryStore>();

function createMediaQueryStore(query: string): MediaQueryStore {
  const media =
    typeof window !== "undefined"
      ? window.matchMedia(query)
      : undefined;
    
  const listeners = new Set<() => void>();

  const notify = () => {
    listeners.forEach((listener) => listener());
  };

  return {
    getSnapshot() {
      return media?.matches ?? false;    
    },

    getServerSnapshot() {
      return false;
    },

    subscribe(listener) {
      if (!media) {
        return () => {};
      }

      listeners.add(listener);

      if (listeners.size === 1) {
        media.addEventListener("change", notify);
      }

      return () => {
        listeners.delete(listener);

        if (listeners.size === 0) {
          media.removeEventListener("change", notify);
          stores.delete(query);
        }
      };
    },
  };
}

function getMediaQueryStore(query: string) {
  let store = stores.get(query);

  if (!store) {
    store = createMediaQueryStore(query);
    stores.set(query, store);
  }

  return store;
}

export function useMediaQuery(query: string): boolean {
  const store = getMediaQueryStore(query);

  return useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getServerSnapshot,
  );
}
