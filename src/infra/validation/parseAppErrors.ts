import { createErrorParser } from '@/data/validation/subjects/createErrorParser'

import { AppError } from '@/domain/commons/errors/AppError'

import { recursivelyGetAllErrors } from './utils/recursivelyGetAllErrors'

/**
 * Parses an error into an object format.
 * It will put all of them in `app` field.
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
