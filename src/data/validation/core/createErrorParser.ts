type IErrorHandler = (
  error: unknown,
  messages: Readonly<App.Infra.Validation.ErrorMessages>,
) => App.Infra.Validation.ErrorMessages

/**
 * A function which exists to create error parsers with proper typings,
 * respecting the interfaces and outputs.
 *
 * @param error The error to be parsed.
 * @returns parsed validation messages from the error.
 */
const createErrorParser = (handleError: IErrorHandler) => {
  const messages = Object.freeze<App.Infra.Validation.ErrorMessages>({})

  return (error: unknown) => handleError(error, messages)
}

export { createErrorParser }
