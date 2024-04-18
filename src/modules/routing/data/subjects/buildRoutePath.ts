import { type RoutePaths } from '../enums/RoutePaths'
import { parseRoutePath } from '../utils/parseRoutePath'

const buildRoutePath: App.Modules.Routing.BuildRoutePathFn<RoutePaths> =
  parseRoutePath.bind(null)

export { buildRoutePath }
