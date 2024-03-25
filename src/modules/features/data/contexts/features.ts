import { createContext } from '@/data/react/subjects/createContext'

interface IFeaturesContextData {
  addFeatures: (...ids: App.Modules.Features.FeatureFlag[]) => void
  clearFeatures: () => void
  hasFeatures: (...ids: App.Modules.Features.FeatureFlag[]) => boolean
  exceptFeatures: (...ids: App.Modules.Features.FeatureFlag[]) => boolean
  removeFeatures: (...ids: App.Modules.Features.FeatureFlag[]) => void
}

const FEATURES_CONTEXT_NAME = 'Modules.Features.Context'

const [FeaturesContextProvider, useFeatures] =
  createContext<IFeaturesContextData>(null, FEATURES_CONTEXT_NAME)

export { FeaturesContextProvider, useFeatures }
