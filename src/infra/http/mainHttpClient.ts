import { createHttpClient } from '@/data/http/subjects/createHttpClient'

const mainHttpClient = createHttpClient(import.meta.env.VITE_MAIN_API_URL)

export { mainHttpClient }
