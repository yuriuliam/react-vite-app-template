import { isMode } from '../environment'
import { isAsyncFunction } from '../functions'
import { deferred } from '../promises'

/**
 * Defers an async method for a given amount of milliseconds.
 *
 * It can only be applied to async methods.
 *
 * @param ms the amount of milliseconds.
 * @param envModes the accepted environment modes to inject the faker.
 */
const Deferred = (ms: number, ...envModes: string[]) => {
  const decorator: MethodDecorator = (target, _key, descriptor) => {
    if (envModes.length && !envModes.some(isMode)) return

    const originalMethod = Reflect.get(descriptor, 'value')

    if (!isAsyncFunction(originalMethod)) {
      throw new TypeError('Deferred Decorator should be used on async methods')
    }

    const boundMethod = originalMethod.bind(target)

    const callback = async (...args: any) =>
      await deferred(await boundMethod(...args), ms)

    Reflect.set(descriptor, 'value', callback)
  }

  return decorator as any
}

export { Deferred }
