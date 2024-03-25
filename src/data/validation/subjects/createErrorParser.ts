/**
 * A function which exists to create error parsers with proper typings,
 * respecting the interfaces and outputs.
 *
 * @param error The error to be parsed.
 * @returns parsed validation messages from the error.
 */
const createErrorParser: App.Domain.Validation.CreateErrorParserFn =
  handleError => {
    const messages = Object.freeze({})

    return error => handleError(error, messages)
  }

export { createErrorParser }
