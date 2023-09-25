import { isFunctionType, memoize } from '../functions'

/**
 * memos an accessor/method return value from a class.
 */
const Memoize = (cache = new Map<string, any>()) => {
  const decorator: MethodDecorator = (_target, _key, descriptor) => {
    const method = Reflect.get(descriptor, descriptor.value ? 'value' : 'get')!

    if (!method || !isFunctionType(method)) {
      throw new TypeError(
        'Memoized should be used on a method or get accessors',
      )
    }

    Reflect.set(
      descriptor,
      descriptor.value ? 'value' : 'get',
      memoize(method, cache),
    )
  }

  return decorator as any
}

export { Memoize }
