import { MODE } from './constants'

const isMode = (mode: string) => import.meta.env.MODE === mode

const isDevelopmentMode = isMode.bind(null, MODE.DEVELOPMENT)

const isProductionMode = isMode.bind(null, MODE.PROD)

const isTestMode = isMode.bind(null, MODE.TEST)

export { isDevelopmentMode, isMode, isProductionMode, isTestMode }
