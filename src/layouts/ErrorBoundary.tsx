import React from 'react'
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom'

import { Flex, Section } from '@radix-ui/themes'

import { COMPONENTS, ROUTES } from '@/utils/constants'

const ErrorBoundary: React.FC = () => {
  const navigate = useNavigate()
  const errorFromRoutes = useRouteError()

  const isRouteError = isRouteErrorResponse(errorFromRoutes)

  const handleRedirectToRoot = React.useCallback(() => {
    navigate(ROUTES.ROOT, { replace: true })
  }, [navigate])

  React.useEffect(() => {
    if (isRouteError) return

    globalThis.logger.error({
      name: 'ErrorBoundary',
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
ErrorBoundary.displayName = COMPONENTS.NAMES.ERROR_BOUNDARY

export { ErrorBoundary }
