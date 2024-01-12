type ErrorHandler = App.Infra.Validation.IErrorHandler
type ErrorParser = App.Infra.Validation.IErrorParser

/**
 * A function which exists to create error parsers with proper typings,
 * respecting the interfaces and outputs.
 *
 * @param error The error to be parsed.
 * @returns parsed validation messages from the error.
 */
const createErrorParser = (handleError: ErrorHandler) => {
  const messages = {}

  return (error => handleError(error, messages)) as ErrorParser
}

export { createErrorParser }
