import { createHttpClient } from '@/data/protocols/http/createHttpClient'

const mainHttpClient = createHttpClient(import.meta.env.VITE_API_MAIN_URL)

export { mainHttpClient }
