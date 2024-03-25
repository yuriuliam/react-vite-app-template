class AppError extends Error {
  public constructor(message: string, baseError: unknown | null = null) {
    super(message, { cause: baseError })
  }
}

export { AppError }
