import { createContext } from '@/infra/react/use-cases/createContext'

interface IFeaturesContextData {
  addFeatures: (...ids: string[]) => void
  clearFeatures: () => void
  hasFeatures: (...ids: string[]) => boolean
  removeFeatures: (...ids: string[]) => void
}

const FEATURES_CONTEXT_NAME = 'Modules.Features.Context'

const [FeaturesContextProvider, useFeatures] =
  createContext<IFeaturesContextData>(null, FEATURES_CONTEXT_NAME)

export { FeaturesContextProvider, useFeatures }
