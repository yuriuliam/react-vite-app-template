import { Logger } from '@/services/logger'

// Inject Global Logger
;(() => {
  // Inserting debug flag to display information
  globalThis.localStorage.debug = import.meta.env.DEV
    ? 'app:*'
    : 'app:main,app:main:*'

  // Creating Global Logger Instance
  globalThis.logger = Logger.getGlobalInstance()
})()
