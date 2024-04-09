import { isCuid } from '@paralleldrive/cuid2'

const isCUID: App.Domain.Identity.IsCUID = isCuid.bind(null)

export { isCUID }
