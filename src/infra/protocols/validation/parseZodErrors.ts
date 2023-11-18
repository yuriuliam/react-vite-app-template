import { ZodError } from 'zod'

import { createErrorParser } from '@/data/protocols/validation'

import { defaultOrNull } from '@/shared/utils/objects'

/**
 * Parses an error into an object format.
 * It will attempt to name all the errors by path,
 * otherwise it will put in `zod` field.
 *
 * If it receives a non-zod error, it will return an empty object.
 */
const parseZodErrors = createErrorParser((error, messages) => {
  if (!(error instanceof ZodError)) return messages

  const hasAllPaths = error.issues.every(issue => !!issue.path.length)

  return error.issues.reduce(
    (acc, issue) => {
      const path = hasAllPaths ? defaultOrNull(issue.path)! : 'zod'

      const messages =
        path in acc ? [...acc[path], issue.message] : [issue.message]

      return {
        ...acc,
        [path]: messages,
      }
    },
    { ...messages },
  )
})

export { parseZodErrors }
