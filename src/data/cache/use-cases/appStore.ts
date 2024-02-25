import { createAppStore } from '@/infra/cache/use-cases/createAppStore'

const [appStore, appAtom] = createAppStore()

export { appStore, appAtom }
