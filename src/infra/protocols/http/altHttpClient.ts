import { createHttpClient } from '@/data/protocols/http'

const altHttpClient = createHttpClient(import.meta.env.VITE_API_ALT_URL)

export { altHttpClient }
