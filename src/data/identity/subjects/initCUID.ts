import { init } from '@paralleldrive/cuid2'

type InitCUIDFn = App.Domain.Identity.InitCUIDFn

const initCUID: InitCUIDFn = ({ prefix, ...options } = {}) => {
  const generateCUID = init({
    random: Math.random,
    length: 10,
    fingerprint: import.meta.env.VITE_CUID_FINGERPRINT,
    ...options,
  })

  return () => (prefix ? `${prefix}_${generateCUID()}` : generateCUID())
}

export { initCUID }
