import { z } from 'zod'

const ViteEnvironmentKeys = z.object({
  BASE_URL: z.string(),
  MODE: z.string(),
  DEV: z.boolean(),
  PROD: z.boolean(),
  SSR: z.boolean(),
  VITE_API_MAIN_URL: z.string(),
})

const EnvironmentKeys = ViteEnvironmentKeys.extend({
  VITE_APP_API_URL: z.string().min(1),
  VITE_APP_CUID_FINGERPRINT: z.string().min(1),
}).strict()

export { EnvironmentKeys }
