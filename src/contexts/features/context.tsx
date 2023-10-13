/* eslint-disable react-refresh/only-export-components */
import { createContext } from '@/internals/createContext'

import { COMPONENTS } from '@/utils/constants'

interface IFeaturesContextData {
  addFeatures: (...ids: string[]) => void
  clearFeatures: () => void
  fetchFeatures: (token: string | null) => Promise<void>
  hasFeatures: (...ids: string[]) => boolean
  removeFeatures: (...ids: string[]) => void
}

const [FeaturesContextProvider, useFeatures] =
  createContext<IFeaturesContextData>(null, COMPONENTS.NAMES.FEATURES)

export { FeaturesContextProvider, useFeatures }
