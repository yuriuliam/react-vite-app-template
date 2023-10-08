import React from 'react'
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom'

import { Flex, Section } from '@radix-ui/themes'

import { useCallbackRef } from '@/hooks/useCallbackRef'

import { COMPONENTS, ROUTES } from '@/utils/constants'

/**
 * A middleware for possible application errors.
 */
const ErrorBoundary: React.FC = () => {
  const navigate = useNavigate()
  const errorFromRoutes = useRouteError()

  const isRouteError = isRouteErrorResponse(errorFromRoutes)

  const handleRedirectToRoot = useCallbackRef(() => {
    navigate(ROUTES.ROOT, { replace: true })
  })

  React.useEffect(() => {
    if (isRouteError) return

    globalThis.logger.error({
      name: COMPONENTS.NAMES.ERROR_BOUNDARY_GUARD,
      content: 'Non-router error caught!',
      data: { error: errorFromRoutes },
    })
  }, [errorFromRoutes, isRouteError])

  return (
    <Flex align="center" direction="column">
      {isRouteError ? (
        <>
          <Section size="2">Page Not found</Section>
          <Section size="2">Unfortunately this page does not exist</Section>
          <Section size="2">
            <button onClick={handleRedirectToRoot}>Go to the Main Page</button>
          </Section>
        </>
      ) : (
        <>
          <Section size="2">Something went wrong</Section>
          <Section size="2">
            We caught an unexpected behavior from the app
          </Section>
          <Section size="2">
            <button onClick={handleRedirectToRoot}>Go to the Main Page</button>
          </Section>
        </>
      )}
    </Flex>
  )
}
ErrorBoundary.displayName = COMPONENTS.NAMES.ERROR_BOUNDARY_GUARD

export { ErrorBoundary }
