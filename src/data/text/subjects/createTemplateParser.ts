const createTemplateParser = <T>(
  formatter: App.IndexedPredicateFn<T, string>,
) => {
  return (base: TemplateStringsArray, ...args: T[]) =>
    base.reduce(
      (acc, cur, idx) => `${acc}${formatter(args.at(idx - 1)!, idx)}${cur}`,
    )
}

export { createTemplateParser }
