/* eslint-disable @typescript-eslint/ban-types */
import 'react'

type ContextProvider<TProps = any> = React.PFC<Partial<TProps>>
type UseContextFn<T> = (consumerName: string) => T

type CreateContextFn = <T extends Record<string, any>>(
  initialValue: T | null,
  componentName: string,
) => [
  Provider: ContextProvider<T>,
  useContext: UseContextFn<T>,
  Consumer: React.Consumer<T>,
]

declare global {
  declare namespace React {
    /** A shortcut to get intrinsic element names. */
    type HTMLTags = keyof React.JSX.IntrinsicElements

    /** A shortcut to get component props of intrinsic elements. */
    type HTMLProps<TElement extends React.HTMLTags> =
      React.ComponentProps<TElement>

    type ComponentPropsWithoutChildren<T extends React.ComponentType<any>> =
      PropsWithoutChildren<React.ComponentProps<T>>

    type PropsWithoutChildren<TProps> = Omit<TProps, 'children'>

    /**
     * Latest versions of react types does not includes children in
     * props reference.
     * This was declared as an shortcut to avoid using `PropsWithChildren` type
     * all the time.
     */
    type ParentFunctionComponent<TProps = {}> = React.FC<
      React.PropsWithChildren<TProps>
    >

    /** @see {ParentFunctionComponent} */
    type PFC<TProps = {}> = ParentFunctionComponent<TProps>

    /**
     * This represents a component composed by more than one component, uniquely
     * made for it's purposes.
     */
    type ComposedFunctionComponent<
      SubComponents extends Record<string, React.FC> = {},
      TProps = {},
    > = ParentFunctionComponent<TProps> & SubComponents

    /** @see {ComposedFunctionComponent} */
    type CFC<
      SubComponents extends Record<string, React.FC> = {},
      TProps = {},
    > = ComposedFunctionComponent<SubComponents, TProps>

    type PossibleRef<T> = React.Ref<T> | undefined
  }
}

export = global
