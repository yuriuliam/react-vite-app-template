import { afterEach, vi } from 'vitest'

import { createEventHandler } from '@/data/events/createEventHandler'

const createEventAdapterMock = () => {
  const eventHandler = createEventHandler()

  const addEventListener = vi.fn(eventHandler.addEventListener)
  const removeEventListener = vi.fn(eventHandler.removeEventListener)
  const dispatchEvent = vi.fn(eventHandler.dispatchEvent)

  return {
    addEventListener,
    removeEventListener,
    dispatchEvent,
  }
}

const spyOnEventAdapter = (
  eventHandler: App.Domain.Event.IEventHandler<any>,
) => {
  const addEventListener = vi.spyOn(eventHandler, 'addEventListener')
  const removeEventListener = vi.spyOn(eventHandler, 'removeEventListener')
  const dispatchEvent = vi.spyOn(eventHandler, 'dispatchEvent')

  afterEach(() => {
    addEventListener.mockClear()
    removeEventListener.mockClear()
    dispatchEvent.mockClear()
  })

  return {
    addEventListener,
    removeEventListener,
    dispatchEvent,
  }
}

export { createEventAdapterMock, spyOnEventAdapter }
