type Formatter<T> = (value: T) => string

const createParser = <T>(formatter: Formatter<T>) => {
  const parse = formatter

  const template = (base: TemplateStringsArray, ...args: T[]) =>
    base.reduce(
      (acc, cur, idx) => `${acc}${formatter(args.at(idx - 1)!)}${cur}`,
    )

  return { parse, template }
}

export { createParser }
export type { Formatter }
