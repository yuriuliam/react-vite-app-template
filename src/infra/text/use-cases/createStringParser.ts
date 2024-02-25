type StringFormatter<T> = (value: T) => string

const createStringParser = <T>(formatter: StringFormatter<T>) => {
  const parse = (value: T) => formatter(value)

  const template = (base: TemplateStringsArray, ...args: T[]) =>
    base.reduce(
      (acc, cur, idx) => `${acc}${formatter(args.at(idx - 1)!)}${cur}`,
    )

  return { parse, template }
}

export { createStringParser }
export type { StringFormatter }
