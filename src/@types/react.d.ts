/* eslint-disable @typescript-eslint/ban-types */
import 'react'

declare global {
  declare namespace React {
    type ParentFunctionComponent<T = {}> = React.FC<React.PropsWithChildren<T>>
    type PFC<T = {}> = ParentFunctionComponent<T>

    type PossibleRef<T> = React.Ref<T> | undefined

    type ComposedRefFn<T> = (node: T) => void
  }
}

export = global
