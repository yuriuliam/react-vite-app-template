import { init } from '@paralleldrive/cuid2'

const createCUID2: App.Domain.Identity.CreateCUID2 = init({
  random: Math.random,
  length: 10,
  fingerprint: import.meta.env.VITE_CUID_FINGERPRINT,
})

export { createCUID2 }
