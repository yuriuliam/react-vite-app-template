import { useSet } from '@uidotdev/usehooks'

import { FeaturesContextProvider } from './context'

import { useAPI } from '@/hooks/useAPI'
import { useCallbackRef } from '@/hooks/useCallbackRef'
import { useLogger } from '@/hooks/useLogger'

import { COMPONENTS, LOGGER } from '@/utils/constants'

const FeaturesProvider: React.PFC = ({ children }) => {
  const api = useAPI()
  const logger = useLogger(LOGGER.NAMESPACES.FEATURES_PROVIDER)

  const features = useSet<string>()

  const addFeatures = useCallbackRef((...ids: string[]) => {
    logger.log({
      name: COMPONENTS.NAMES.FEATURES_PROVIDER,
      title: 'addFeatures::()',
      content: `Adding ${ids.length} feature(s)`,
      data: ids,
    })

    ids.forEach(id => {
      if (features.has(id)) return

      features.add(id)
    })
  })

  const clearFeatures = useCallbackRef(() => {
    const currentFeatures = Array.from(features.values())

    logger.log({
      name: COMPONENTS.NAMES.FEATURES_PROVIDER,
      title: 'clearFeatures::()',
      content: `Clearing ${currentFeatures.length} feature(s)`,
      data: currentFeatures,
    })

    features.clear()
  })

  const fetchFeatures = useCallbackRef(async (token: string | null) => {
    const features = await api.getFeatures(token)

    if (!features) {
      logger.error({
        name: COMPONENTS.NAMES.FEATURES_PROVIDER,
        content: "Couldn't fetch user features",
      })

      return
    }

    addFeatures(...features)
  })

  const hasFeatures = useCallbackRef((...ids: string[]) =>
    ids.every(id => features.has(id)),
  )

  const removeFeatures = useCallbackRef((...ids: string[]) => {
    logger.log({
      name: COMPONENTS.NAMES.FEATURES_PROVIDER,
      title: 'removeFeatures::()',
      content: `Removing ${ids.length} feature(s)`,
      data: ids,
    })

    ids.forEach(id => {
      if (!features.has(id)) return

      features.delete(id)
    })
  })

  return (
    <FeaturesContextProvider
      addFeatures={addFeatures}
      clearFeatures={clearFeatures}
      fetchFeatures={fetchFeatures}
      hasFeatures={hasFeatures}
      removeFeatures={removeFeatures}
    >
      <>{children}</>
    </FeaturesContextProvider>
  )
}
FeaturesProvider.displayName = COMPONENTS.NAMES.FEATURES_PROVIDER

export { FeaturesProvider }
