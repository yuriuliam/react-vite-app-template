declare global {
  declare namespace App.Domain.Toast {
    type ToastMessage = {
      id: string
      title: string
      type?: ToastType | undefined
      description: string
    }

    type ToastId = ToastMessage['id']
    type ToastType = 'success' | 'error' | 'info'
    type ToastWithoutId = Omit<ToastMessage, 'id'>

    type AddToastFn = (toast: ToastWithoutId) => void
    type RemoveToastFn = (toastId: ToastId) => void
  }
}

export = global
