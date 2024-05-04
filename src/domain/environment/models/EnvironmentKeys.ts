import { z } from 'zod'

const ViteEnvironmentKeys = z.object({
  BASE_URL: z.string(),
  MODE: z.string(),
  DEV: z.boolean(),
  PROD: z.boolean(),
  SSR: z.boolean(),
})

const EnvironmentKeys = ViteEnvironmentKeys.extend({
  VITE_API_URL: z.string().min(1, 'API URL must be defined'),
  VITE_CUID_FINGERPRINT: z.string().min(1, 'CUID Fingerprint must be defined'),
})

export { EnvironmentKeys }
