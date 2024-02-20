import React from 'react'

import { useAuth } from '@/modules/auth/infra/contexts/auth/context'
import { useCallbackRef } from '@/modules/react/infra/hooks/useCallbackRef'
import { useSet } from '@/modules/react/infra/hooks/useSet'

import { useFeaturesServices } from '../../hooks/useFeaturesServices'
import { FeaturesContextProvider } from './context'

const FEATURES_PROVIDER_NAME = 'Modules.Features.Provider'

const FeaturesProvider: React.PFC = ({ children }) => {
  const { loadFeatures } = useFeaturesServices()

  const { isAuthenticated, token } = useAuth(FEATURES_PROVIDER_NAME)

  const features = useSet([] as App.Modules.Features.AppFeatures)

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

  const fetchFeaturesEffect = useCallbackRef(async (authToken: string) => {
    const features = await loadFeatures(authToken)

    if (!features) return

    addFeatures(...features)
  })

  React.useEffect(() => {
    if (!token) return

    void fetchFeaturesEffect(token)
  }, [fetchFeaturesEffect, token])

  // If Client sign-out we want to clear up all feature flags.
  React.useEffect(() => {
    if (isAuthenticated) return

    clearFeatures()
  }, [clearFeatures, isAuthenticated])

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
