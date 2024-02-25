declare global {
  declare namespace App.Domain.Event {
    type EventBase = { type: string }

    type InitialObservers<TEvent extends EventBase> = Iterable<
      Readonly<[string, Set<Listener<TEvent>>]>
    > | null

    type Listener<TEvent extends EventBase> = (event: TEvent) => any

    interface IEventHandler<TEvent extends EventBase> {
      addEventListener: (type: string, observer: Listener<TEvent>) => void
      removeEventListener: (type: string, observer: Listener<TEvent>) => void
      dispatchEvent: (event: TEvent) => void
    }
  }
}

export = global
