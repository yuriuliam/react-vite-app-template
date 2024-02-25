/* eslint-disable @typescript-eslint/ban-types */
import 'react'

declare global {
  declare namespace React {
    /** A shortcut to get intrinsic element names. */
    type HTMLTags = keyof React.JSX.IntrinsicElements

    /** A shortcut to get component props of intrinsic elements. */
    type HTMLProps<TElement extends React.HTMLTags> =
      React.ComponentProps<TElement>

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

    type PossibleRef<T> = React.Ref<T> | undefined

    type GenericComponent =
      | React.NamedExoticComponent<any>
      | React.ComponentType<any>
  }
}

export = global
