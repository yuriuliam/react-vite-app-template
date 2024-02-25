import React from 'react'

import { useCallbackRef } from '@/infra/react/hooks/useCallbackRef'
import { useSet } from '@/infra/react/hooks/useSet'

import { FeaturesContextProvider } from '../../infra/contexts/features'
import { useFeaturesData } from '../../infra/hooks/useFeaturesData'

const FEATURES_PROVIDER_NAME = 'Modules.Features.Provider'

const FeaturesProvider: React.PFC = ({ children }) => {
  const { featureList } = useFeaturesData(FEATURES_PROVIDER_NAME)

  const features = useSet([] as App.Modules.Features.Domain.AppFeatures)

  const addFeatures = useCallbackRef((...ids: string[]) => {
    features.add(...ids.filter(id => !features.has(id)))
  })

  const clearFeatures = useCallbackRef(() => {
    features.clear()
  })

  const hasFeatures = useCallbackRef((...ids: string[]) =>
    ids.every(id => features.has(id)),
  )

  const removeFeatures = useCallbackRef((...ids: string[]) => {
    features.delete(...ids.filter(id => features.has(id)))
  })

  React.useEffect(() => {
    clearFeatures()

    if (!featureList) return

    addFeatures(...featureList)
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
