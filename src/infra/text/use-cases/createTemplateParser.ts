const createTemplateParser = <T>(formatter: App.ConvertFn<T, string>) => {
  return (base: TemplateStringsArray, ...args: T[]) =>
    base.reduce(
      (acc, cur, idx) => `${acc}${formatter(args.at(idx - 1)!)}${cur}`,
    )
}

export { createTemplateParser }
