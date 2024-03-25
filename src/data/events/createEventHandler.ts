const createEventHandler: App.Domain.Event.CreateEventHandlerFn =
  initialObservers => {
    const observersByType = new Map(initialObservers)

    const addEventListener: App.Domain.Event.AddEventListenerFn = (
      type,
      observer,
    ) => {
      const observers = observersByType.get(type) ?? new Set()

      if (observers.has(observer)) return

      observers.add(observer)
      observersByType.set(type, observers)
    }

    const removeEventListener: App.Domain.Event.RemoveEventListenerFn = (
      type,
      observer,
    ) => {
      const observers = observersByType.get(type) ?? new Set()

      void observers.delete(observer)
    }

    const dispatchEvent: App.Domain.Event.DispatchEventFn = event => {
      const eventType = event.type

      if (!observersByType.has(eventType)) return

      Array.from(observersByType.get(eventType)!).forEach(observer => {
        void observer(event)
      })
    }

    return {
      addEventListener,
      removeEventListener,
      dispatchEvent,
    }
  }

export { createEventHandler }
