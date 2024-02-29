import React from 'react'

import { useCallbackRef } from '@/infra/react/hooks/useCallbackRef'
import { useSet } from '@/infra/react/hooks/useSet'

import { FeaturesContextProvider } from '../../infra/contexts/features'
import { useFeaturesData } from '../../infra/hooks/useFeaturesData'

const FEATURES_PROVIDER_NAME = 'Modules.Features.Provider'

const FeaturesProvider: React.PFC = ({ children }) => {
  const { featureList } = useFeaturesData(FEATURES_PROVIDER_NAME)

  const features = useSet([] as App.Modules.Features.AppFeatures)

  const addFeatures = useCallbackRef(features.add)

  const clearFeatures = useCallbackRef(() => {
    features.clear()
  })

  const hasFeatures = useCallbackRef(features.has)

  const removeFeatures = useCallbackRef((...ids: string[]) => {
    features.delete(...ids.filter(id => features.has(id)))
  })

  React.useEffect(() => {
    clearFeatures()

    if (!featureList) return

    addFeatures(...featureList.map(feat => feat.code))
  }, [addFeatures, clearFeatures, featureList])

  return (
    <FeaturesContextProvider
      addFeatures={addFeatures}
      clearFeatures={clearFeatures}
      hasFeatures={hasFeatures}
      removeFeatures={removeFeatures}
    >
      <>{children}</>
    </FeaturesContextProvider>
  )
}
FeaturesProvider.displayName = FEATURES_PROVIDER_NAME

export { FeaturesProvider }
