import React from 'react'

import { TOAST_TTL_IN_MS } from '../config/toast'
import { useToast } from '../contexts/toast'

const useToastItem = (
  consumerName: string,
  message: App.Domain.Toast.ToastMessage,
) => {
  const { removeToast } = useToast(consumerName)

  const removeToastMessage = React.useCallback(() => {
    removeToast(message.id)
  }, [removeToast, message.id])

  React.useEffect(() => {
    const timer = setTimeout(removeToastMessage, TOAST_TTL_IN_MS)

    return () => {
      clearTimeout(timer)
    }
  }, [message.id, removeToastMessage])

  return { removeToastMessage }
}

export { useToastItem }
