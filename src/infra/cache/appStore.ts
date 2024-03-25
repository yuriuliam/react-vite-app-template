import { createAppStore } from '@/data/cache/subjects/createAppStore'

const [appStore, appAtom] = createAppStore()

export { appStore, appAtom }
