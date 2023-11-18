import { createContext } from '../../utils/createContext'

/* eslint-disable react-refresh/only-export-components */
interface IFeaturesContextData {
  addFeatures: (...ids: string[]) => void
  clearFeatures: () => void
  hasFeatures: (...ids: string[]) => boolean
  removeFeatures: (...ids: string[]) => void
}

const FEATURES_CONTEXT_NAME = 'Features'

const [FeaturesContextProvider, useFeatures] =
  createContext<IFeaturesContextData>(null, FEATURES_CONTEXT_NAME)

export { FeaturesContextProvider, useFeatures }
