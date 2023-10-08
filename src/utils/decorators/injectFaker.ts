import { faker, type Faker } from '@faker-js/faker'

import { isMode } from '../environment'
import { isAsyncFunction, isFunctionType } from '../functions'
import { promisify } from '../promises'

type InjectionFn = (faker: Faker) => any

/**
 * Override the method/getter to return a value of your choice.
 *
 * The Injection function receives a Data Faker instance, which can be used
 * as a data generator, certainly fake.
 *
 * If the original method is async, the method will be injected as
 * an async callback.
 *
 * @param cb A callback to generate the faker data.
 * @param envModes the accepted environment modes to inject the faker.
 */
const InjectFaker = (cb: InjectionFn, ...envModes: string[]) => {
  const decorator: MethodDecorator = (_target, _key, descriptor) => {
    if (envModes.length && !envModes.some(isMode)) return

    const methodKey = descriptor.value ? 'value' : 'get'
    const originalMethod = Reflect.get(descriptor, methodKey)

    if (!isFunctionType(originalMethod)) {
      throw new TypeError(
        'InjectFaker Decorator should be used on methods or get accessors',
      )
    }

    const callback = cb.bind(null, faker)
    const overrideMethod = isAsyncFunction(originalMethod)
      ? promisify(callback)
      : callback

    Reflect.set(descriptor, methodKey, overrideMethod)
  }

  return decorator as any
}

export { InjectFaker }
