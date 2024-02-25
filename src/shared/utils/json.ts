const standardArgsReplacer = (_k: string, v: any) => {
  if (v === undefined) return 'undefined'

  if (v instanceof Set) return Array.from(v)

  if (v instanceof Map) return Object.fromEntries(v.entries())

  return v
}

export { standardArgsReplacer }
