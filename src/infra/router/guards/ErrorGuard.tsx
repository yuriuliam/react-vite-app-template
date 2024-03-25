import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Flex, Section } from '@radix-ui/themes'

import { AppRoute } from '@/data/app/enums/AppRoute'
import { createErrorBoundary } from '@/data/router/subjects/createErrorBoundary'
import { useCallbackRef } from '@/data/shared/hooks/useCallbackRef'

import { useGlobalLogger } from '@/infra/logger/hooks/useGlobalLogger'

const ERROR_GUARD_LOGGER_NAME = 'error-boundary'

/**
 * A middleware for possible application errors.
 */
const ErrorGuard = createErrorBoundary(
  ({ error: errorFromRoutes, isRouteError }) => {
    const logger = useGlobalLogger(ERROR_GUARD_LOGGER_NAME)
    const navigate = useNavigate()

    const handleRedirectToRoot = useCallbackRef(() => {
      navigate(AppRoute.Home)
    })

    React.useEffect(() => {
      if (isRouteError) return

      logger.error({
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
                Go to the Main Page
              </button>
            </Section>
          </>
        )}
      </Flex>
    )
  },
)

export { ErrorGuard }
