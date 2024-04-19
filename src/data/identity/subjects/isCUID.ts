import { isCuid } from '@paralleldrive/cuid2'

const isCUID: App.Domain.Identity.IsCUIDFn = isCuid.bind(null)

export { isCUID }
