import { createHttpClient } from '@/infra/http/use-cases/createHttpClient'

const mainHttpClient = createHttpClient(import.meta.env.VITE_API_MAIN_URL)

export { mainHttpClient }
