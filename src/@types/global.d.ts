declare global {
  /**
   * Global instance of the App Logger.
   *
   * See `scripts/globalLogger.ts`
   */
  let logger: App.Infra.Logger.ILogger
}

export = global
