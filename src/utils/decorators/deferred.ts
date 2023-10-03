import { isAsyncFunction } from '../functions'
import { deferred } from '../promises'

const Deferred = (ms: number) => {
  const decorator: MethodDecorator = (_target, _key, descriptor) => {
    const methodKey = descriptor.value ? 'value' : 'get'
    const originalMethod = Reflect.get(descriptor, methodKey)

    if (!isAsyncFunction(originalMethod)) {
      throw new TypeError(
        'Delay should be used on async methods or get accessors',
      )
    }

    const callback = async (...args: any) =>
      await deferred(originalMethod(...args), ms)

    Reflect.set(descriptor, methodKey, callback)
  }

  return decorator as any
}

export { Deferred }
