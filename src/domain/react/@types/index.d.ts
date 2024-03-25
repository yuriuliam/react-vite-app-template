declare global {
  declare namespace App.Domain.React {
    type ContextProvider<TProps = any> = globalThis.React.PFC<Partial<TProps>>
    type UseContextFn<T> = (consumerName: string) => T

    type CreateContextFn = <T extends Record<string, any>>(
      initialValue: T | null,
      componentName: string,
    ) => [
      Provider: ContextProvider<T>,
      useContext: UseContextFn<T>,
      Consumer: globalThis.React.Consumer<T>,
    ]
  }
}

export = global
