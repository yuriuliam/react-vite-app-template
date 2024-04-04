import React from 'react'

import { useCallbackRef } from '@/shared/hooks/useCallbackRef'
import { useSet } from '@/shared/hooks/useSet'

import { FeaturesContextProvider } from '../../data/contexts/features'
import { useFeaturesQuery } from '../../infra/hooks/useFeaturesQuery'
import { fetchFeaturesService } from '../fetchFeaturesService'

const FEATURES_PROVIDER_NAME = 'Modules.Features.Provider'

const FeaturesProvider: React.PFC = ({ children }) => {
  const [featureList] = useFeaturesQuery(
    FEATURES_PROVIDER_NAME,
    fetchFeaturesService,
  )

  const features = useSet<App.Modules.Features.FeatureFlag>()

  const addFeatures = useCallbackRef(
    (...values: App.Modules.Features.FeatureFlag[]) => {
      values.forEach(value => features.add(value))
    },
  )

  const clearFeatures = useCallbackRef(features.clear.bind(features))

  const exceptFeatures = useCallbackRef(
    (...ids: App.Modules.Features.FeatureFlag[]) =>
      ids.every(id => !features.has(id)),
  )

  const hasFeatures = useCallbackRef(
    (...values: App.Modules.Features.FeatureFlag[]) =>
      values.every(value => features.has(value)),
  )

  const removeFeatures = useCallbackRef(
    (...ids: App.Modules.Features.FeatureFlag[]) => {
      ids.forEach(id => void features.delete(id))
    },
  )

  React.useEffect(() => {
    React.startTransition(() => {
      clearFeatures()

      if (!featureList) return

      addFeatures(...featureList.map(feat => feat.code))
    })
  }, [addFeatures, clearFeatures, featureList])

  return (
    <FeaturesContextProvider
      addFeatures={addFeatures}
      clearFeatures={clearFeatures}
      exceptFeatures={exceptFeatures}
      hasFeatures={hasFeatures}
      removeFeatures={removeFeatures}
    >
      <>{children}</>
    </FeaturesContextProvider>
  )
}
FeaturesProvider.displayName = FEATURES_PROVIDER_NAME

export { FeaturesProvider }
