declare global {
  declare namespace App.Infra.Event {
    type EventBase = { type: string }

    type Listener<TEvent extends EventBase> = (event: TEvent) => any

    type EventHandler<TEvent extends EventBase> = {
      addEventListener: (type: string, observer: Listener<TEvent>) => void
      removeEventListener: (type: string, observer: Listener<TEvent>) => void
      dispatchEvent: (event: TEvent) => void
    }
  }
}

export = global
