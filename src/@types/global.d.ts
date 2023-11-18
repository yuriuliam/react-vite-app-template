import type { ILogger } from '@/data/protocols/logger'

declare global {
  /**
   * Global instance of the App Logger.
   *
   * See `scripts/globalLogger.ts`
   */
  var logger: ILogger
}

export = global
