const areDependenciesEqual = (
  nextDeps: React.DependencyList,
  prevDeps: React.DependencyList,
) => {
  if (nextDeps.length !== prevDeps.length) return false

  for (let i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (Object.is(nextDeps.at(i), prevDeps.at(i))) continue

    return false
  }

  return true
}

export { areDependenciesEqual }
