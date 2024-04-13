declare global {
  declare namespace App.Domain.Environment {
    type IsEnvironmentFn = () => boolean
    type IsTestFn = IsEnvironmentFn
    type IsDevelopmentFn = IsEnvironmentFn
    type IsProductionFn = IsEnvironmentFn
  }
}

export = global
