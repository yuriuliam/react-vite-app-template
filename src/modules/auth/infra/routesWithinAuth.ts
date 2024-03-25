import { createRoutesWithinElement } from '@/data/router/subjects/createRoutesWithinElement'

import { AuthGuard } from './guards/AuthGuard'

const routesWithinAuth = createRoutesWithinElement.bind(null, AuthGuard)

export { routesWithinAuth }
