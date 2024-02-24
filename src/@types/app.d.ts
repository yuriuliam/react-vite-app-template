declare global {
  /**
   * Represents the types belonging to the app.
   * They are not from any module, unless explicitly declared.
   * @see App (Root)
   * @see App.Domain (Infra)
   * @see App.Models (Models)
   * @see App.Domain (Modules)
   */
  declare namespace App {}
}

export = global
