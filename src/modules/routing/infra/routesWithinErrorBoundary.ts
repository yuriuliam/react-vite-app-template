import { createRoutesWithinErrorElement } from '../data/subjects/createRoutesWithinErrorElement'
import { ErrorGuard } from './guards/ErrorGuard'

const routesWithinErrorGuard = createRoutesWithinErrorElement.bind(
  null,
  ErrorGuard,
)

export { routesWithinErrorGuard }
