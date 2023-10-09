import { isMode } from '../environment'
import { type MemoizeOptions, isFunctionType, memoize } from '../functions'

/**
 * memos an accessor/method return value from a class.
 *
 * @param memoOptions memoized options.
 * @returns
 */
const Memoize = (memoOptions?: MemoizeOptions<any>, ...envModes: string[]) => {
  const decorator: MethodDecorator = (target, _key, descriptor) => {
    if (envModes.length && !envModes.some(isMode)) return

    const methodKey = descriptor.value ? 'value' : 'get'
    const originalMethod = Reflect.get(descriptor, methodKey)!

    if (!originalMethod || !isFunctionType(originalMethod)) {
      throw new TypeError(
        'Memoized Decorator should be used on methods or get accessors',
      )
    }

    const boundMethod = originalMethod.bind(target)
    Reflect.set(descriptor, methodKey, memoize(boundMethod, memoOptions))
  }

  return decorator as any
}

export { Memoize }
