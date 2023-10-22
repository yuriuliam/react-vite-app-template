import type { Logger } from '@/services/logger'

declare global {
  /**
   * This is part of the app types.
   *
   * It describes the Theme Definitions which can be globally used in the app.
   */
  declare namespace AppDefs {
    interface ITheme {
      primary: string
    }
  }
}

export = global
