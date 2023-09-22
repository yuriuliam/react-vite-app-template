import { faker, type Faker } from '@faker-js/faker'

import { memoize } from '../functions'

type NonVoid<T> = T extends undefined ? never : T
type InjectionFn<T = any> = (faker: Faker) => NonVoid<T>

const InjectFaker = (cb: InjectionFn, memo = false) => {
  const decorator: MethodDecorator = (_target, _key, descriptor) => {
    const method = cb.bind(null, faker)
    const override = memo ? memoize(method) : method

    Reflect.set(descriptor, 'value', override)
  }

  return decorator as any
}

export { InjectFaker }
