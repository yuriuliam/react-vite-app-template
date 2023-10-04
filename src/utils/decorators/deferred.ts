import { isAsyncFunction } from '../functions'
import { deferred } from '../promises'

/**
 * Defers an async method for a given amount of milliseconds.
 *
 * It can only be applied to async methods.
 */
const Deferred = (ms: number) => {
  const decorator: MethodDecorator = (_target, _key, descriptor) => {
    const originalMethod = Reflect.get(descriptor, 'value')

    if (!isAsyncFunction(originalMethod)) {
      throw new TypeError('Delay Decorator should be used on async methods')
    }

    const callback = async (...args: any) =>
      await deferred(await originalMethod(...args), ms)

    Reflect.set(descriptor, 'value', callback)
  }

  return decorator as any
}

export { Deferred }
