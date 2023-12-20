import React from 'react'

import { useCallbackRef } from '../../hooks/useCallbackRef'
import { useLogger } from '../../hooks/useLogger'
import { useSet } from '../../hooks/useSet'
import { useAuth } from '../auth/context'
import { FeaturesContextProvider } from './context'

import { loadFeatures } from '@/modules/features/infra/services/loadFeaturesService'

const FEATURES_PROVIDER_NAME = 'Providers.Features'
const FEATURES_PROVIDER_LOGGER_NAME = 'providers:features'

const FeaturesProvider: React.PFC = ({ children }) => {
  const logger = useLogger(FEATURES_PROVIDER_LOGGER_NAME)

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
