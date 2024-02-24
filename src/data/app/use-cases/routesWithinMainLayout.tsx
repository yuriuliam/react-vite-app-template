import { createRoutesWithinElement } from '@/infra/router/use-cases/createRoutesWithinElement'

import { MainLayout } from '../layouts/MainLayout'

const routesWithinMainLayout = createRoutesWithinElement.bind(null, MainLayout)

export { routesWithinMainLayout }
