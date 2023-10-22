import { vi } from 'vitest'

type EventListener = (...args: any[]) => any
type OnEmitEvent = (...args: any[]) => any

type EventEmitter = {
  addEventListener: (event: string, listener: EventListener) => any
  dispatchEvent: (event: string, ...args: any[]) => any
  removeEventListener: (event: string, listener: EventListener) => any
}

const createEventEmitterMock = (onEmit: OnEmitEvent = () => void 0) => {
  const listeners = new Map<string, any[]>()

  const addEventListener = vi.fn((event: string, listener: EventListener) => {
    const listenersToEvent = listeners.get(event) ?? []

    listeners.set(event, [...listenersToEvent, listener])
  })

  const removeEventListener = vi.fn(
    (event: string, listener: EventListener) => {
      const listenersToEvent = listeners.get(event) ?? []

      listeners.set(
        event,
        listenersToEvent.filter(eventListener => eventListener !== listener),
      )
    },
  )

  const dispatchEvent = vi.fn((event: string, ...args: any[]) => {
    const allListeners = listeners.get(event) ?? []

    onEmit()
    allListeners.forEach(eventListener => void eventListener(...args))
  })

  return {
    addEventListener,
    dispatchEvent,
    removeEventListener,
  } satisfies EventEmitter
}

const createEventEmitterFnMock = (onEmit: OnEmitEvent = () => void 0) => {
  const eventEmitter = createEventEmitterMock(onEmit)

  return vi.fn(() => eventEmitter)
}

const mockEventListenerImplementation = <T extends Record<any, any>>(
  target: Record<any, any>,
  eventEmitter: EventEmitter | undefined = undefined,
  rest: T | undefined = {} as any,
) => {
  eventEmitter = eventEmitter ?? createEventEmitterMock()

  const targetAddEventListenerMock = vi.spyOn(target, 'addEventListener' as any)
  const targetDispatchEventMock = vi.spyOn(target, 'dispatchEvent' as any)
  const targetRemoveEventListenerMock = vi.spyOn(
    target,
    'removeEventListener' as any,
  )

  targetAddEventListenerMock.mockImplementation(
    eventEmitter.addEventListener as any,
  )
  targetDispatchEventMock.mockImplementation(eventEmitter.dispatchEvent as any)
  targetRemoveEventListenerMock.mockImplementation(
    eventEmitter.addEventListener as any,
  )

  return {
    ...rest,
    addEventListener: targetAddEventListenerMock,
    dispatchEvent: targetDispatchEventMock,
    removeEventListener: targetRemoveEventListenerMock,
  }
}

export {
  createEventEmitterFnMock,
  createEventEmitterMock,
  mockEventListenerImplementation,
}
