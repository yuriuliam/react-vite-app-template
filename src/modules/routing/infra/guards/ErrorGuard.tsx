import React from 'react'

import { Flex, Section } from '@radix-ui/themes'

import { useGlobalLogger } from '@/modules/logging/infra/hooks/useGlobalLogger'

import { useCallbackRef } from '@/shared/hooks/useCallbackRef'

import { RoutePaths } from '../../data/enums/RoutePaths'
import { createErrorBoundary } from '../../data/subjects/createErrorBoundary'

const ERROR_GUARD_LOGGER_NAME = 'error-boundary'

/**
 * A middleware for possible application errors.
 */
const ErrorGuard = createErrorBoundary(
  ({ error: errorFromRoutes, isRouteError, navigateTo }) => {
    const guardLogger = useGlobalLogger(ERROR_GUARD_LOGGER_NAME)

    const handleRedirectToRoot = useCallbackRef(() => {
      navigateTo(RoutePaths.Home, {})
    })

    React.useEffect(() => {
      if (isRouteError) return

      guardLogger.error({
        content: 'Non-router error caught!',
        data: { error: errorFromRoutes },
      })
    }, [errorFromRoutes, isRouteError]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <Flex align="center" direction="column">
        {isRouteError ? (
          <>
            <Section size="2">Page Not found</Section>
            <Section size="2">Unfortunately this page does not exist</Section>
            <Section size="2">
              <button onClick={handleRedirectToRoot}>
                Go to the Main Page
              </button>
            </Section>
          </>
        ) : (
          <>
            <Section size="2">Something went wrong</Section>
            <Section size="2">
              We caught an unexpected behavior from the app
            </Section>
            <Section size="2">
              <button onClick={handleRedirectToRoot}>
                Get back to the App
              </button>
            </Section>
          </>
        )}
      </Flex>
    )
  },
)

export { ErrorGuard }
