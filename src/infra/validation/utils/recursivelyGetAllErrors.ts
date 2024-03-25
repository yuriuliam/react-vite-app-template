function recursivelyGetAllErrors(error: unknown, ...allErrors: Error[]) {
  if (!(error instanceof Error)) return allErrors

  return recursivelyGetAllErrors(error.cause, ...allErrors, error)
}

export { recursivelyGetAllErrors }
