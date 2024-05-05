class AppError extends Error {
  public constructor(message: string, baseError: unknown = undefined) {
    super(message, { cause: baseError })
  }
}

export { AppError }
