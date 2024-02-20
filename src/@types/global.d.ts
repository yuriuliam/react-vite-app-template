declare global {
  /**
   * Global instance of the App Logger.
   *
   * See `scripts/globalLogger.ts`
   */
  var logger: App.Modules.Logger.ILogger
}

export = global
