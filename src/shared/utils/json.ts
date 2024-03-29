const standardArgsReplacer = (_k: string, v: any) => {
  if (v === undefined) return 'undefined'

  if (v instanceof Set) return Array.from(v)

  if (v instanceof Map) return Object.fromEntries(v.entries())

  if (v instanceof Date) return v.toISOString()

  return v
}

export { standardArgsReplacer }
