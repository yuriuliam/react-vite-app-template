import { type RoutePaths } from '../enums/RoutePaths'
import { parseRoutePath } from '../utils/parseRoutePath'

const buildRoutePath: App.Domain.Router.BuildRoutePathFn<RoutePaths> =
  parseRoutePath.bind(null)

export { buildRoutePath }
