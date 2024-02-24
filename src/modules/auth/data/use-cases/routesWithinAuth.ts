import { createRoutesWithinElement } from '@/infra/router/use-cases/createRoutesWithinElement'

import { AuthGuard } from '../../infra/guards/AuthGuard'

const routesWithinAuth = createRoutesWithinElement.bind(null, AuthGuard)

export { routesWithinAuth }
