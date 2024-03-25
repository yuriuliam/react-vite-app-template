declare global {
  declare namespace App.Domain.React {
    type WithPropsComponent<TProps, TBound> = globalThis.React.FC<
      Omit<TProps, keyof TBound> & Partial<TBound>
    >

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

    type ComposedWithHOC = (
      ...components: Array<globalThis.React.ComponentType<any>>
    ) => globalThis.React.PFC

    type WithPropsHOC = <
      TProps extends Record<any, any>,
      TBound = Partial<TProps>,
    >(
      Component: globalThis.React.ComponentType<TProps>,
      propsToBound: TBound,
    ) => WithPropsComponent<TProps, TBound>
  }
}

export = global
