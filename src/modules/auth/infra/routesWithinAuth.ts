import { createRoutesWithinElement } from '@/modules/routing/data/subjects/createRoutesWithinElement'

import { AuthGuard } from './guards/AuthGuard'

const routesWithinAuth = createRoutesWithinElement.bind(null, AuthGuard)

export { routesWithinAuth }
