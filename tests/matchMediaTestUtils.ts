import { vi } from 'vitest'

type MediaQueryListener = (event: MediaQueryListEvent) => void

const listeners = new Map<string, Set<MediaQueryListener>>()
const matches = new Map<string, boolean>()

export function installMatchMediaMock() {
  listeners.clear()
  matches.clear()

  vi.stubGlobal('matchMedia', (query: string): MediaQueryList => {
    let queryListeners = listeners.get(query)

    if (!queryListeners) {
      queryListeners = new Set<MediaQueryListener>()
      listeners.set(query, queryListeners)
    }

    return {
      media: query,
      onchange: null,
      get matches() {
        return matches.get(query) ?? false
      },
      addEventListener(_type: 'change', listener: EventListenerOrEventListenerObject) {
        queryListeners.add(listener as MediaQueryListener)
      },
      removeEventListener(_type: 'change', listener: EventListenerOrEventListenerObject) {
        queryListeners.delete(listener as MediaQueryListener)
      },
      addListener() {},
      removeListener() {},
      dispatchEvent() {
        return true
      },
    }
  })
}

export function setMatch(query: string, nextValue: boolean) {
  matches.set(query, nextValue)
  const event = { matches: nextValue, media: query } as MediaQueryListEvent
  listeners.get(query)?.forEach((listener) => listener(event))
}

export function seedMatch(query: string, value: boolean) {
  matches.set(query, value)
}
