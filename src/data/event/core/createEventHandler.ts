const createEventHandler = <TEvent extends App.Infra.Event.EventBase>(
  initialObservers?:
    | Iterable<Readonly<[string, Set<App.Infra.Event.Listener<TEvent>>]>>
    | null
    | undefined,
) => {
  const observersByType = new Map(initialObservers)

  const addEventListener = (
    type: string,
    observer: App.Infra.Event.Listener<TEvent>,
  ) => {
    const observers = observersByType.get(type) ?? new Set()

    if (observers.has(observer)) return

    observers.add(observer)
    observersByType.set(type, observers)
  }

  const removeEventListener = (
    type: string,
    observer: App.Infra.Event.Listener<TEvent>,
  ) => {
    const observers = observersByType.get(type) ?? new Set()

    void observers.delete(observer)
  }

  const dispatchEvent = (event: TEvent) => {
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
  } satisfies App.Infra.Event.EventHandler<TEvent>
}

export { createEventHandler }
