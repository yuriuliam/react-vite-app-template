/* eslint-disable @typescript-eslint/ban-types */
import 'react'

declare global {
  declare namespace React {
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
  }
}

export = global
