declare global {
  declare namespace App.Domain.Toast {
    type AppToastId = AppToastMessage['id']
    type AppToastType = 'success' | 'error' | 'info'
    type AppToastWithoutId = Omit<AppToastMessage, 'id'>

    type AppToastMessage = {
      id: string
      title: string
      type?: AppToastType | undefined
      description: string
    }

    type AddToastFn = (toast: AppToastWithoutId) => void
    type RemoveToastFn = (toastId: AppToastId) => void
  }
}

export = global
