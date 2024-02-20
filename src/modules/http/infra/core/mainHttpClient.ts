import { createHttpClient } from '@/modules/http/data/core/createHttpClient'

const mainHttpClient = createHttpClient(import.meta.env.VITE_API_MAIN_URL)

export { mainHttpClient }
