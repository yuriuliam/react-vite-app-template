type IErrorHandler = (
  error: unknown,
  messages: Readonly<App.Modules.Validation.ErrorMessages>,
) => App.Modules.Validation.ErrorMessages

/**
 * A function which exists to create error parsers with proper typings,
 * respecting the interfaces and outputs.
 *
 * @param error The error to be parsed.
 * @returns parsed validation messages from the error.
 */
const createErrorParser = (handleError: IErrorHandler) => {
  const messages = Object.freeze<App.Modules.Validation.ErrorMessages>({})

  return (error: unknown) => handleError(error, messages)
}

export { createErrorParser }
