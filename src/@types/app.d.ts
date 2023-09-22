import type { Logger } from '@/services/logger'

declare global {
  /**
   * Global instance of the App Logger.
   *
   * Check `scripts/globalLogger.ts`
   */
  var logger: Logger
}

export = global
