import { createContext } from '@/infra/react/use-cases/createContext'

interface IFeaturesContextData {
  addFeatures: (...ids: App.Modules.Features.AppFeatureFlag[]) => void
  clearFeatures: () => void
  hasFeatures: (...ids: App.Modules.Features.AppFeatureFlag[]) => boolean
  exceptFeatures: (...ids: App.Modules.Features.AppFeatureFlag[]) => boolean
  removeFeatures: (...ids: App.Modules.Features.AppFeatureFlag[]) => void
}

const FEATURES_CONTEXT_NAME = 'Modules.Features.Context'

const [FeaturesContextProvider, useFeatures] =
  createContext<IFeaturesContextData>(null, FEATURES_CONTEXT_NAME)

export { FeaturesContextProvider, useFeatures }
