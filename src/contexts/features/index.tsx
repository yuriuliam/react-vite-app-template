import React from 'react'

import { FeaturesContextProvider } from './context'

import { useLogger } from '../../hooks/useLogger'
import { useSet } from '@uidotdev/usehooks'

import { LOGGER } from '../../utils/constants'

const FeaturesProvider: React.PFC = ({ children }) => {
  const logger = useLogger(LOGGER.NAMESPACES.FEATURES)

  const features = useSet<string>()

  const addFeatures = React.useCallback(
    (...ids: string[]) => {
      logger.log({
        name: 'FeaturesProvider',
        title: 'addFeatures::()',
        content: `Adding ${ids.length} feature(s)`,
        data: ids,
      })

      ids.forEach(id => {
        if (features.has(id)) return

        features.add(id)
      })
    },
    [features, logger],
  )

  const hasFeatures = React.useCallback(
    (...ids: string[]) => ids.every(id => features.has(id)),
    [features],
  )

  const removeFeatures = React.useCallback(
    (...ids: string[]) => {
      logger.log({
        name: 'Features',
        title: 'removeFeatures::()',
        content: `Removing ${ids.length} feature(s)`,
        data: ids,
      })

      ids.forEach(id => {
        if (!features.has(id)) return

        features.delete(id)
      })
    },
    [features, logger],
  )

  return (
    <FeaturesContextProvider
      addFeatures={addFeatures}
      hasFeatures={hasFeatures}
      removeFeatures={removeFeatures}
    >
      <>{children}</>
    </FeaturesContextProvider>
  )
}
FeaturesProvider.displayName = 'App.FeaturesProvider'

export { FeaturesProvider }
