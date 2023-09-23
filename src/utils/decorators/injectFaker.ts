import { faker, type Faker } from '@faker-js/faker'

import { isAsyncFunction, isFunctionType, memoize } from '../functions'

type InjectionFn = (faker: Faker) => any

/**
 * Override the method/getter to return a value of your choice.
 *
 * The Injection function receives a Data Faker instance.
 */
const InjectFaker = (cb: InjectionFn, memo = false) => {
  const decorator: MethodDecorator = (_target, _key, descriptor) => {
    const originalMethod = Reflect.get(
      descriptor,
      descriptor.value ? 'value' : 'get',
    )!

    if (!originalMethod || !isFunctionType(originalMethod)) {
      throw new TypeError(
        'InjectFaker should be used on a method or get accessors',
      )
    }

    const callback = cb.bind(null, faker)
    const method = isAsyncFunction(originalMethod)
      ? async () =>
          await new Promise(resolve => {
            resolve(callback())
          })
      : () => callback()

    const overrideMethod = memo ? memoize(method) : method

    Reflect.set(descriptor, descriptor.value ? 'value' : 'get', overrideMethod)
  }

  return decorator as any
}

export { InjectFaker }
