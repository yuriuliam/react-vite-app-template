import { createHttpClient } from '@/data/http/subjects/createHttpClient'

const mainHttpClient = createHttpClient(import.meta.env.VITE_APP_API_URL)

export { mainHttpClient }
