import React from 'react'

/**
 * Listens and retrieves user's current preferred language.
 *
 * @returns current preferred language.
 */
const usePreferredLanguage = () =>
  React.useSyncExternalStore(
    onLanguageChange => {
      window.addEventListener('languagechange', onLanguageChange)

      return () => {
        window.removeEventListener('languagechange', onLanguageChange)
      }
    },
    () => window.navigator.language,
  )

export { usePreferredLanguage }
