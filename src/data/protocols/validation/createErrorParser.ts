type ErrorMessages = Record<string, string[]>
type IErrorHandler = (error: unknown, messages: ErrorMessages) => ErrorMessages
type IErrorParser = (error: unknown) => ErrorMessages

/**
 * A function which exists to create error parsers with proper typings,
 * respecting the interfaces and outputs.
 *
 * @param error The error to be parsed.
 * @returns parsed validation messages from the error.
 */
const createErrorParser = (handleError: IErrorHandler) => {
  const messages = {}

  return (error => handleError(error, messages)) as IErrorParser
}

export { createErrorParser }
export type { ErrorMessages, IErrorParser }
