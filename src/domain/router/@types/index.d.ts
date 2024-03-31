import {
  type To,
  type Path,
  type RouteObject,
  type NavigateFunction,
} from 'react-router-dom'

declare global {
  declare namespace App.Domain.Router {
    type NavigateToFn = <T>(route: string, params: RoutePath<T>) => void

    type RouterRoot = globalThis.React.FC
    type RouteGuard = globalThis.React.FC

    type ErrorBoundaryBaseProps = {
      error: unknown
      isRouteError: boolean
      navigateTo: NavigateToFn
    }
    type ErrorBoundaryBase = globalThis.React.FC<ErrorBoundaryBaseProps>

    type PageProps<T> = {
      params: T
      search: URLSearchParams
      navigateTo: NavigateToFn
    }
    type PageFC<T> = globalThis.React.FC<PageProps<T>>

    type UseNextRouteFn = () => To | null | undefined

    type CreateRouteWithinElementFn = (
      Element: globalThis.React.FC,
      routes: RouteObject[],
    ) => RouteObject

    type CreateRouteWithinErrorElementFn = (
      Element: globalThis.React.FC,
      routes: RouteObject[],
    ) => RouteObject

    type RouteParams = Record<string, string>

    type RoutePath<T extends RouteParams> = Partial<
      Omit<Path, 'pathname' | 'search'>
    > & {
      search?: URLSearchParams | undefined
      params?: T | undefined
    }

    type UseNavigateToFn = () => NavigateToFn

    type CreatePageFn = <T extends RouteParams>(
      PageComponent: PageFC<T>,
    ) => globalThis.React.FC

    type CreateRouterFn = (routes: RouteObject[]) => RouterRoot

    type CreateErrorBoundaryFn = (GuardHandler: ErrorBoundaryBase) => RouteGuard

    type CreateNextRouteGuardFn = (useNextRoute: UseNextRouteFn) => RouteGuard
  }
}

export = global
