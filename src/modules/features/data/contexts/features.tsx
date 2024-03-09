import React from 'react'

import { useCallbackRef } from '@/infra/react/hooks/useCallbackRef'
import { useSet } from '@/infra/react/hooks/useSet'

import { FeaturesContextProvider } from '../../infra/contexts/features'
import { useFeaturesQuery } from '../../infra/hooks/useFeaturesQuery'

const FEATURES_PROVIDER_NAME = 'Modules.Features.Provider'

const FeaturesProvider: React.PFC = ({ children }) => {
  const { featureList } = useFeaturesQuery(FEATURES_PROVIDER_NAME)

  const features = useSet<App.Modules.Features.AppFeatureFlag>()

  const addFeatures = useCallbackRef(
    (...values: App.Modules.Features.AppFeatureFlag[]) => {
      values.forEach(value => features.add(value))
    },
  )

  const clearFeatures = useCallbackRef(features.clear.bind(features))

  const exceptFeatures = useCallbackRef(
    (...ids: App.Modules.Features.AppFeatureFlag[]) =>
      ids.every(id => !features.has(id)),
  )

  const hasFeatures = useCallbackRef(
    (...values: App.Modules.Features.AppFeatureFlag[]) =>
      values.every(value => features.has(value)),
  )

  const removeFeatures = useCallbackRef(
    (...ids: App.Modules.Features.AppFeatureFlag[]) => {
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
