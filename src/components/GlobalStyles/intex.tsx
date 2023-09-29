import React from 'react'

import { COMPONENTS } from '@/utils/constants'

import { global } from '@/styles/global.ts'

/**
 * An exotic component to inject global styles into the app.
 */
const GlobalStyles: React.PFC = ({ children }) => {
  React.useInsertionEffect(() => {
    document.documentElement.classList.add(global)

    return () => {
      document.documentElement.classList.remove(global)
    }
  }, [])

  return <>{children}</>
}
GlobalStyles.displayName = COMPONENTS.NAMES.GLOBAL_STYLES

export { GlobalStyles }
