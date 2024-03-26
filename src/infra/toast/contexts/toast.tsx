import React from 'react'

import { createUUID } from '@/data/identity/subjects/createUUID'
import { ToastContextProvider } from '@/data/toast/contexts/toast'

import { useCallbackRef } from '@/shared/hooks/useCallbackRef'

import { ToastContainer } from '../components/ToastContainer'

const TOAST_PROVIDER_NAME = 'Data.Toast.Provider'

const ToastProvider: React.PFC = ({ children }) => {
  const [messages, setMessages] = React.useState<
    App.Domain.Toast.ToastMessage[]
  >([])

  const addToast = useCallbackRef<App.Domain.Toast.AddToastFn>(
    ({ title, description, type }) => {
      const id = createUUID()

      const toast = {
        id,
        type,
        title,
        description,
      }

      setMessages(state => [...state, toast])
    },
  )

  const removeToast = useCallbackRef<App.Domain.Toast.RemoveToastFn>(id => {
    setMessages(state => state.filter(message => message.id !== id))
  })

  return (
    <ToastContextProvider addToast={addToast} removeToast={removeToast}>
      {children}

      <ToastContainer messages={messages} />
    </ToastContextProvider>
  )
}
ToastProvider.displayName = TOAST_PROVIDER_NAME

export { ToastProvider }
