declare global {
  /**
   * Represents the types belonging to the app.
   * They are not from any module, unless explicitly declared.
   * @see App (Root)
   * @see App.Infra (Infra)
   * @see App.Models (Models)
   * @see App.Modules (Modules)
   */
  declare namespace App {}
}

export = global
