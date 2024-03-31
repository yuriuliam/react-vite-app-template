import React from 'react'

import { Button } from '@radix-ui/themes'
import { type Meta, type StoryObj } from '@storybook/react'

import { useToast } from '@/data/toast/contexts/toast'

import { themed } from '@/infra/theme/hocs/themed'
import { GlobalStyles } from '@/infra/theme/styles/global'

import { useConst } from '@/shared/hooks/useConst'

import { ToastProvider } from '.'

type ToastProviderMeta = Meta<typeof ToastProvider>
type ToastProviderStory = StoryObj<typeof ToastProvider>

const meta = {
  title: 'Infra/Toast/Contexts/ToastProvider',
} satisfies ToastProviderMeta

const POP_TOAST_BUTTON_NAME = 'Infra.Toast.Storybook.PopToastButton'

const PopToastButton = themed(() => {
  const options = useConst<App.Domain.Toast.ToastWithoutId[]>([
    {
      type: 'info',
      title: 'Info toast',
      description: 'This is an info toast',
    },
    {
      type: 'success',
      title: 'Success toast',
      description: 'This is a success toast',
    },
    {
      type: 'error',
      title: 'Error toast',
      description: 'This is an error toast',
    },
  ])

  const { addToast } = useToast(POP_TOAST_BUTTON_NAME)

  const [toastIdx, setToastIdx] = React.useState(0)

  const popToast = () => {
    addToast(options[toastIdx])
    setToastIdx((toastIdx + 1) % options.length)
  }

  return <Button onClick={popToast}>Trigger Toast</Button>
})

export const Default = {
  render: () => (
    <ToastProvider>
      <GlobalStyles />
      <PopToastButton />
    </ToastProvider>
  ),
} satisfies ToastProviderStory

export default meta
