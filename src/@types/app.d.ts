declare global {
  /**
   * Represents the types belonging to the app.
   * They are not from any module, unless explicitly declared.
   * @see App @see App.Infra @see App.Models @see App.Modules
   */
  declare namespace App {}
}

export = global
