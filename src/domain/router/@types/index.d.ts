import { type To, type RouteObject } from 'react-router-dom'

declare global {
  declare namespace App.Domain.Router {
    type RouterRoot = globalThis.React.FC
    type RouteGuard = globalThis.React.FC

    type ErrorBoundaryBaseProps = { error: unknown; isRouteError: boolean }
    type ErrorBoundaryBase = globalThis.React.FC<ErrorBoundaryBaseProps>

    type UseNextRouteFn = () => To | null | undefined

    type CreateRouteWithinElementFn = (
      Element: React.FC,
      routes: RouteObject[],
    ) => RouteObject

    type CreateRouteWithinErrorElementFn = (
      Element: React.FC,
      routes: RouteObject[],
    ) => RouteObject

    type CreateRouterFn = (routes: RouteObject[]) => RouterRoot

    type CreateErrorBoundaryFn = (GuardHandler: ErrorBoundaryBase) => RouteGuard

    type CreateNextRouteGuardFn = (useNextRoute: UseNextRouteFn) => RouteGuard
  }
}

export = global
