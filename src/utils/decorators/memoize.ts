import { type MemoizeOptions, isFunctionType, memoize } from '../functions'

/**
 * memos an accessor/method return value from a class.
 */
const Memoize = (memoOptions?: MemoizeOptions<any>) => {
  const decorator: MethodDecorator = (_target, _key, descriptor) => {
    const methodKey = descriptor.value ? 'value' : 'get'
    const method = Reflect.get(descriptor, methodKey)!

    if (!method || !isFunctionType(method)) {
      throw new TypeError(
        'Memoized Decorator should be used on methods or get accessors',
      )
    }

    Reflect.set(descriptor, methodKey, memoize(method, memoOptions))
  }

  return decorator as any
}

export { Memoize }
