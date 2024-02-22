import { createRoutesWithinElement } from '@/modules/router/data/core/createRoutesWithinElement'

import { AuthGuard } from '../guards/AuthGuard'

const routesWithinAuth = createRoutesWithinElement.bind(null, AuthGuard)

export { routesWithinAuth }
