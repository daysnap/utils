export interface EventBusCallback {
  (...args: any[]): void
}

let events: Record<string, EventBusCallback[]> = {}

function off(eventName: string, callback: EventBusCallback) {
  if (events[eventName]) {
    events[eventName] = events[eventName].filter((item) => item !== callback)

    if (!events[eventName].length) {
      delete events[eventName]
    }
  }
}

function on(eventName: string, callback: EventBusCallback) {
  ;(events[eventName] || (events[eventName] = [])).push(callback)

  return () => off(eventName, callback)
}

function emit(eventName: string, ...args: any[]) {
  const callbacks = events[eventName]
  if (callbacks) {
    callbacks.forEach((callback) => callback(...args))
  }
}

function clear(eventName?: string) {
  if (eventName) {
    delete events[eventName]
  } else {
    events = {}
  }
}

export const eventBus = {
  on,
  off,
  emit,
  clear,
}
