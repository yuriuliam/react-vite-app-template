import { isFunctionType, memoize } from '../functions'

const Memoize = () => {
  const decorator: MethodDecorator = (_target, _key, descriptor) => {
    const method = Reflect.get(descriptor, 'value')

    if (!method || !isFunctionType(method)) {
      throw new TypeError(
        'Memoized should be used on a method or get accessors',
      )
    }

    Reflect.set(descriptor, 'value', memoize(method))
  }

  return decorator as any
}

export { Memoize }
