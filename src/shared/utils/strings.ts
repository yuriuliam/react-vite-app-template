type ToStringFn<T> = (value: T) => string
type Formatter<T> = (value: T) => string

const createStringifyAdapter = <T>(formatter: Formatter<T>) => {
  const parse: ToStringFn<T> = value => formatter(value)

  const template = (base: TemplateStringsArray, ...args: T[]) =>
    base.reduce(
      (acc, cur, idx) => `${acc}${formatter(args.at(idx - 1)!)}${cur}`,
    )

  return { parse, template }
}

export { createStringifyAdapter }
export type { Formatter }
