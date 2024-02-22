import { createRoutesWithinElement } from '@/modules/router/data/core/createRoutesWithinElement'

import { MainLayout } from '../components/MainLayout'

const routesWithinMainLayout = createRoutesWithinElement.bind(null, MainLayout)

export { routesWithinMainLayout }
