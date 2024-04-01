import {
  type To,
  type Path,
  type RouteObject,
  type NavigateFunction,
  type SetURLSearchParams,
} from 'react-router-dom'

declare global {
  declare namespace App.Domain.Router {
    type RouteGuard = globalThis.React.FC

    type RouteNavigationOptions<T extends RouteParams> = Partial<
      Omit<Path, 'pathname' | 'search'>
    > & {
      search?: URLSearchParams | undefined
      params?: T | undefined
    }
    type NavigateToFn<TRoutes extends string> = <T>(
      route: TRoutes,
      options: RouteNavigationOptions<T>,
    ) => void

    type ErrorBoundaryBaseProps<TRoutes extends string> = {
      error: unknown
      isRouteError: boolean
      navigateTo: NavigateToFn<TRoutes>
    }
    type ErrorBoundaryBase<TRoutes extends string> = globalThis.React.FC<
      ErrorBoundaryBaseProps<TRoutes>
    >

    type CreateErrorBoundaryFn<TRoutes extends string> = (
      GuardHandler: ErrorBoundaryBase<TRoutes>,
    ) => RouteGuard

    type PageProps<T, TRoutes extends string> = {
      /**
       * Meant to be a Record of for parameter-oriented pathnames.
       *
       * e.g.:
       * The route `/user/:id/posts/:postId` would produce:
       * `{ id: string, postId: string }`
       */
      params: T
      /**
       * Navigate through the application.
       */
      navigateTo: NavigateToFn<TRoutes>
      /**
       * Equivalent to `?params` in the URL.
       */
      search: URLSearchParams
      setURLSearchParams: SetURLSearchParams
    }
    type PageFC<T, TRoutes extends string> = globalThis.React.FC<
      PageProps<T, TRoutes>
    >

    type CreatePageFn<TRoutes extends string> = <T extends RouteParams>(
      PageComponent: PageFC<T, TRoutes>,
    ) => globalThis.React.FC

    type RouterRoot = globalThis.React.FC
    type CreateRouterFn = (routes: RouteObject[]) => RouterRoot

    /** Assert Route is properly parsed to avoid wrong router navigation. */
    type AssertRouteIsParsedFn = (
      route: To | null | undefined,
      message: string,
    ) => void

    type ParseParamsIntoPathname = (
      route: string,
      params: Record<string, string | number>,
    ) => string

    type CreateRouteWithinElementFn = (
      Element: globalThis.React.FC,
      routes: RouteObject[],
    ) => RouteObject

    type CreateRouteWithinErrorElementFn = (
      Element: globalThis.React.FC,
      routes: RouteObject[],
    ) => RouteObject

    type RouteParams = Record<string, string>

    type UseNavigateToFn<TRoutes extends string> = () => NavigateToFn<TRoutes>

    type UseNextRouteFn = () => To | null | undefined
    type CreateNextRouteGuardFn = (useNextRoute: UseNextRouteFn) => RouteGuard
  }
}

export = global
