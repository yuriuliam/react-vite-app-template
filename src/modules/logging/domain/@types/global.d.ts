declare global {
  /**
   * Global instance of the App Logger.
   *
   * See `scripts/globalLogger.ts`
   */
  var logger: App.Modules.Logging.ILogger
}

export = global
