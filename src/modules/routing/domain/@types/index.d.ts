import {
  type To,
  type Path,
  type RouteObject,
  type NavigateFunction,
  type SetURLSearchParams,
} from 'react-router-dom'

declare global {
  declare namespace App.Modules.Routing {
    type ErrorBoundary = globalThis.React.FC
    type RouteGuard = globalThis.React.FC
    type RouteLayout = globalThis.React.FC

    type RoutePathLike = `/${string}`

    type RouteNavigationOptions = Partial<Omit<Path, 'pathname' | 'search'>> & {
      search?: URLSearchParams | undefined
      params?: T | undefined
    }
    type NavigateToFn<TRoutePath extends RoutePathLike> = (
      route: TRoutePath,
      options: RouteNavigationOptions,
    ) => void

    type ErrorBoundaryBaseProps<TRoutePath extends RoutePathLike> = {
      error: unknown
      isRouteError: boolean
      navigateTo: NavigateToFn<TRoutePath>
    }
    type ErrorBoundaryBase<TRoutePath extends RoutePathLike> =
      globalThis.React.FC<ErrorBoundaryBaseProps<TRoutePath>>

    type CreateErrorBoundaryFn<TRoutePath extends RoutePathLike> = (
      GuardHandler: ErrorBoundaryBase<TRoutePath>,
    ) => ErrorBoundary

    type RouteLayoutBase = globalThis.React.PFC
    type CreateRouteLayoutFn = (Component: RouteLayoutBase) => RouteLayout

    type PageProps<TRouteParams, TRoutePath extends RoutePathLike> = {
      /**
       * Meant to be a Record of for parameter-oriented pathnames.
       *
       * e.g.:
       * The route `/user/:id/posts/:postId` would produce:
       * `{ id: string, postId: string }`
       */
      routeParams: TRouteParams
      /**
       * Navigate through the application.
       */
      navigateTo: NavigateToFn<TRoutePath>
      /**
       * Equivalent to `?params` in the URL.
       */
      searchParams: URLSearchParams
      setSearchParams: SetURLSearchParams
    }
    type PageFC<
      TRouteParams,
      TRoutePath extends RoutePathLike,
    > = globalThis.React.FC<PageProps<TRouteParams, TRoutePath>>

    type RouteParamsLike = Record<string, string>
    type CreatePageFn<TRoutePath extends RoutePathLike> = <
      TRouteParams extends RouteParamsLike,
    >(
      PageComponent: PageFC<TRouteParams, TRoutePath>,
    ) => globalThis.React.FC

    type RouterRoot = globalThis.React.FC
    type CreateRouterFn = (routes: RouteObject[]) => RouterRoot

    /** Assert Route is properly parsed to avoid wrong router navigation. */
    type AssertRouteIsParsedFn = (
      route: To | null | undefined,
      message: string,
    ) => void

    type BuildRoutePathFn<TRoutePath extends RoutePathLike> = (
      route: TRoutePath,
      routeParams: RouteParamsLike,
    ) => RoutePathLike

    type CreateRouteWithinElementFn = (
      Guard: RouteGuard,
      routes: RouteObject[],
    ) => RouteObject

    type CreateRouteWithinErrorElementFn = (
      ErrorBoundary: ErrorBoundary,
      routes: RouteObject[],
    ) => RouteObject

    type UseNavigateToFn<TRoutePath extends RoutePathLike> =
      () => NavigateToFn<TRoutePath>

    type UseNextRouteFn = () => To | null | undefined
    type CreateNextRouteGuardFn = (useNextRoute: UseNextRouteFn) => RouteGuard
  }
}

export = global
