import React from 'react'

import { useFeaturesServices } from '../../hooks/useFeaturesServices'
import { FeaturesContextProvider } from './context'

import { useLogger } from '@/infra/logger/hooks/useLogger'
import { useCallbackRef } from '@/infra/react/hooks/useCallbackRef'
import { useSet } from '@/infra/react/hooks/useSet'

import { useAuth } from '@/modules/auth/infra/contexts/auth/context'

const FEATURES_PROVIDER_NAME = 'Providers.Features'
const FEATURES_PROVIDER_LOGGER_NAME = 'providers:features'

const FeaturesProvider: React.PFC = ({ children }) => {
  const logger = useLogger(FEATURES_PROVIDER_LOGGER_NAME)
  const { loadFeatures } = useFeaturesServices()

  const { isAuthenticated, token } = useAuth(FEATURES_PROVIDER_NAME)

  const features = useSet<App.Modules.Features.FeatureModel>()

  const addFeatures = useCallbackRef((...ids: string[]) => {
    logger.log({
      name: FEATURES_PROVIDER_NAME,
      title: 'addFeatures::()',
      content: `Adding ${ids.length} feature(s)`,
      data: ids,
    })

    features.add(...ids.filter(id => !features.has(id)))
  })

  const clearFeatures = useCallbackRef(() => {
    const currentFeatures = Array.from(features.values())

    logger.log({
      name: FEATURES_PROVIDER_NAME,
      title: 'clearFeatures::()',
      content: `Clearing ${currentFeatures.length} feature(s)`,
      data: currentFeatures,
    })

    features.clear()
  })

  const hasFeatures = useCallbackRef((...ids: string[]) =>
    ids.every(id => features.has(id)),
  )

  const removeFeatures = useCallbackRef((...ids: string[]) => {
    logger.log({
      name: FEATURES_PROVIDER_NAME,
      title: 'removeFeatures::()',
      content: `Removing ${ids.length} feature(s)`,
      data: ids,
    })

    features.delete(...ids.filter(id => features.has(id)))
  })

  const fetchFeatures = useCallbackRef(async (authToken: string) => {
    const features = await loadFeatures(authToken)

    if (!features) {
      logger.error({
        name: FEATURES_PROVIDER_NAME,
        content: "Couldn't fetch user features",
      })

      return
    }

    addFeatures(...features)
  })

  React.useEffect(() => {
    if (!token) return

    void fetchFeatures(token)
  }, [fetchFeatures, token])

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
