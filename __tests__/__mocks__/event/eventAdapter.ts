import { vi } from 'vitest'

type EventListener = (event: Event) => any

interface IEventAdapterLike {
  addEventListener: (type: string, listener: EventListener) => any
  removeEventListener: (type: string, listener: EventListener) => any
  dispatchEvent: (event: Event) => any
}

const createEventAdapterMock = (
  listeners: Map<string, Set<EventListener>> = new Map(),
) => {
  const addEventListener = vi.fn((type: string, listener: EventListener) => {
    const listenersToEvent = listeners.get(type) ?? new Set<EventListener>()

    if (listenersToEvent.has(listener)) return

    listenersToEvent.add(listener)
    listeners.set(type, listenersToEvent)
  })

  const removeEventListener = vi.fn((type: string, listener: EventListener) => {
    const listenersToEvent = listeners.get(type) ?? new Set<EventListener>()

    listenersToEvent.delete(listener)
  })

  const dispatchEvent = vi.fn((event: Event) => {
    const eventType = event.type

    if (!listeners.has(eventType)) return

    const stopPropagationSpy = vi.spyOn(event, 'stopPropagation')

    Array.from(listeners.get(eventType)!).forEach(listener => {
      if (stopPropagationSpy.mock.calls.length > 1) return

      listener(event)
    })
  })

  return {
    addEventListener,
    removeEventListener,
    dispatchEvent,
  } satisfies IEventAdapterLike
}

const spyOnEventAdapter = (eventEmitter: IEventAdapterLike) => ({
  addEventListener: vi.spyOn(eventEmitter, 'addEventListener'),
  removeEventListener: vi.spyOn(eventEmitter, 'removeEventListener'),
  dispatchEvent: vi.spyOn(eventEmitter, 'dispatchEvent'),
})

export { createEventAdapterMock, spyOnEventAdapter }
