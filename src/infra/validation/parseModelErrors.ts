import { ZodError } from 'zod'

import { createErrorParser } from '@/data/validation/subjects/createErrorParser'

import { reduceErrorIssues } from './utils/reduceErrorIssues'

/**
 * Parses an error into an object format.
 * It will attempt to name all the errors by path,
 * otherwise it will put in `zod` field.
 *
 * If it receives a non-zod error, it will return an empty object.
 */
const parseModelErrors = createErrorParser((error, messages) => {
  if (!(error instanceof ZodError)) return messages

  return reduceErrorIssues(error.issues, messages)
})

export { parseModelErrors }
