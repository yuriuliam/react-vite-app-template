/* eslint-disable react-refresh/only-export-components */
import { createContext } from '@/data/react/createContext'

interface IFeaturesContextData {
  addFeatures: (...ids: string[]) => void
  clearFeatures: () => void
  hasFeatures: (...ids: string[]) => boolean
  removeFeatures: (...ids: string[]) => void
}

const FEATURES_CONTEXT_NAME = 'App.Contexts.Features'

const [FeaturesContextProvider, useFeatures] =
  createContext<IFeaturesContextData>(null, FEATURES_CONTEXT_NAME)

export { FeaturesContextProvider, useFeatures }
