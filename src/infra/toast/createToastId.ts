import { initCUID } from '@/data/identity/subjects/initCUID'

const createToastId = initCUID({ prefix: 'toast' })

export { createToastId }
