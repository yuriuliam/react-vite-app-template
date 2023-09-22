import { faker, type Faker } from '@faker-js/faker'

import { memoize } from '../functions'

type InjectionFn = (faker: Faker) => any

/**
 * Override the method/getter to return a value of your choice.
 *
 * The Injection function receives a Data Faker instance.
 */
const InjectFaker = (cb: InjectionFn, memo = false) => {
  const decorator: MethodDecorator = (_target, _key, descriptor) => {
    const method = cb.bind(null, faker)
    const override = memo ? memoize(method) : method

    Reflect.set(descriptor, descriptor.value ? 'value' : 'get', override)
  }

  return decorator as any
}

export { InjectFaker }
