import React from 'react'

import { createUUID } from '@/data/identity/core/createUUID'

import { useCallbackRef } from '@/infra/react/hooks/useCallbackRef'

import { ToastContainer } from '../../components/ToastContainer'
import { ToastContextProvider } from './context'

const TOAST_PROVIDER_NAME = 'Modules.Toast.Provider'

const ToastProvider: React.PFC = ({ children }) => {
  const [messages, setMessages] = React.useState<
    App.Modules.Toast.AppToastMessage[]
  >([])

  const addToast = useCallbackRef<App.Modules.Toast.AddToastFn>(
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

  const removeToast = useCallbackRef<App.Modules.Toast.RemoveToastFn>(id => {
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
