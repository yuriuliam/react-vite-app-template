type EventBase = { type: string }
type Listener<TEvent extends EventBase> = (event: TEvent) => any

declare global {
  declare namespace App.Domain.Event {
    type AddEventListenerFn<TEvent extends EventBase = any> = (
      type: string,
      observer: Listener<TEvent>,
    ) => void

    type RemoveEventListenerFn<TEvent extends EventBase = any> = (
      type: string,
      observer: Listener<TEvent>,
    ) => void

    type DispatchEventFn<TEvent extends EventBase = any> = (
      event: TEvent,
    ) => void

    interface IEventHandler<TEvent extends EventBase> {
      addEventListener: AddEventListenerFn<TEvent>
      removeEventListener: RemoveEventListenerFn<TEvent>
      dispatchEvent: DispatchEventFn<TEvent>
    }

    type CreateEventHandlerFn = <TEvent extends EventBase>(
      initialObservers?:
        | Iterable<Readonly<[string, Set<Listener<TEvent>>]>>
        | null
        | undefined,
    ) => IEventHandler<TEvent>
  }
}

export = global
