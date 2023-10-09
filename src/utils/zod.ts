import { ZodError } from 'zod'

import { defaultOrNull } from './objects'

const parseZodError = (error: unknown) => {
  const base: Record<string, string[]> = {}

  if (!(error instanceof ZodError)) return base

  return error.issues.reduce<Record<string, string[]>>((acc, cur) => {
    const path = defaultOrNull(cur.path)

    if (!path) return acc

    const errors = Reflect.has(acc, path)
      ? [...acc[path], cur.message]
      : [cur.message]

    return {
      ...acc,
      [path]: errors,
    }
  }, base)
}

export { parseZodError }
