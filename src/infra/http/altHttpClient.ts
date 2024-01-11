import { createHttpClient } from '@/data/http/createHttpClient'

const altHttpClient = createHttpClient(import.meta.env.VITE_API_ALT_URL)

export { altHttpClient }