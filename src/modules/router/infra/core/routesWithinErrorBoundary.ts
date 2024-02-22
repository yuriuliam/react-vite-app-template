import { createRoutesWithinErrorElement } from '../../data/core/createRoutesWithinErrorElement'
import { ErrorGuard } from '../guards/ErrorGuard'

const routesWithinErrorBoundary = createRoutesWithinErrorElement.bind(
  null,
  ErrorGuard,
)

export { routesWithinErrorBoundary }
