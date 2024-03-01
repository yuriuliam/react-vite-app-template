import { ErrorGuard } from '@/infra/router/guards/ErrorGuard'
import { createRoutesWithinErrorElement } from '@/infra/router/use-cases/createRoutesWithinErrorElement'

const routesWithinErrorGuard = createRoutesWithinErrorElement.bind(
  null,
  ErrorGuard,
)

export { routesWithinErrorGuard }
