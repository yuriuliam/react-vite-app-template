import { createRoutesWithinElement } from '@/modules/routing/data/subjects/createRoutesWithinElement'

import { MainLayout } from './layouts/MainLayout'

const routesWithinMainLayout = createRoutesWithinElement.bind(null, MainLayout)

export { routesWithinMainLayout }
