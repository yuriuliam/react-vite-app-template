import { createRoutesWithinElement } from '@/data/router/subjects/createRoutesWithinElement'

import { MainLayout } from './layouts/MainLayout'

const routesWithinMainLayout = createRoutesWithinElement.bind(null, MainLayout)

export { routesWithinMainLayout }
