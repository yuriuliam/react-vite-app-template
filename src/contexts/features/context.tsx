/* eslint-disable react-refresh/only-export-components */
import { createContext } from '../../internals/createContext'

interface IFeaturesContextData {
  addFeatures: (id: string) => void
  hasFeatures: (id: string) => boolean
  removeFeatures: (id: string) => void
}

const [FeaturesContextProvider, useFeatures] =
  createContext<IFeaturesContextData>(null, 'Features')

export { FeaturesContextProvider, useFeatures }
