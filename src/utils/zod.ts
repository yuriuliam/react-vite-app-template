import { ZodError } from 'zod'

import { defaultOrNull } from './objects'

/**
 * Parses an error in object format. It will attempt to name all the errors
 * by path, otherwise it will put in `zod` field.
 *
 * If it receives a non-zod error, it will return an empty object.
 *
 * @param error The error to be parsed.
 * @returns parsed validation messages from the error.
 */
const parseZodErrors = (error: unknown) => {
  const base: Record<string, string[]> = {}

  if (!(error instanceof ZodError)) return base

  const hasPaths = error.issues.every(issue => !!issue.path.length)

  return error.issues.reduce((acc, issue) => {
    const path = hasPaths ? defaultOrNull(issue.path)! : 'zod'

    const messages =
      path in acc ? [...acc[path], issue.message] : [issue.message]

    return {
      ...acc,
      [path]: messages,
    }
  }, base)
}

export { parseZodErrors }
