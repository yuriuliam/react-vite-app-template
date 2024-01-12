import { createErrorParser } from '@/data/validation/core/createErrorParser'

import { AppError } from '@/shared/errors/AppError'

function recursivelyGetAllErrors(error: unknown, ...allErrors: Error[]) {
  if (!(error instanceof Error)) return allErrors

  return recursivelyGetAllErrors(error.cause, ...allErrors, error)
}

/**
 * Parses an error into an object format.
 * It will attempt to name all the errors by path,
 * otherwise it will put in `zod` field.
 *
 * If it receives a non-zod error, it will return an empty object.
 */
const parseAppErrors = createErrorParser((error, messages) => {
  if (!(error instanceof AppError)) return messages

  const allErrors = recursivelyGetAllErrors(error)

  return allErrors.reduce((acc, appError) => {
    const prop = 'app'
    const messages =
      prop in acc ? [...acc[prop], appError.message] : [appError.message]

    return {
      ...acc,
      [prop]: messages,
    }
  }, messages)
})

export { parseAppErrors }
