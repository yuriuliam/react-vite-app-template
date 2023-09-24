import { faker, type Faker } from '@faker-js/faker'

import { isAsyncFunction, isFunctionType, memoize } from '../functions'
import { promisify } from '../promises'

type InjectionFn = (faker: Faker) => any

/**
 * Override the method/getter to return a value of your choice.
 *
 * The Injection function receives a Data Faker instance, which can be used
 * as a data generator, certainly fake.
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
      ? promisify(callback)
      : callback

    const overrideMethod = memo ? memoize(method) : method

    Reflect.set(descriptor, descriptor.value ? 'value' : 'get', overrideMethod)
  }

  return decorator as any
}

export { InjectFaker }
