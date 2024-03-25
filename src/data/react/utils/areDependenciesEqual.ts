import { parallelMap } from '@/shared/utils/objects'

const areDependenciesEqual = (
  nextDeps: React.DependencyList,
  prevDeps: React.DependencyList,
) => {
  if (nextDeps.length !== prevDeps.length) return false

  const depsCheck = parallelMap(nextDeps, prevDeps, ([itemA, itemB]) =>
    Object.is(itemA, itemB),
  )

  return !depsCheck.includes(false)
}

export { areDependenciesEqual }
