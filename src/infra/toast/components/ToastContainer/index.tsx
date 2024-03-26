import React from 'react'

import { useTransition } from '@react-spring/web'

import { BodyPortal } from '@/shared/components/BodyPortal'

import { ToastItem } from '../ToastItem'
import * as Styled from './styles'

type ToastContainerProps = { messages: App.Domain.Toast.ToastMessage[] }

const TOAST_CONTAINER_NAME = 'Data.Toast.ToastContainer'

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const transitions = useTransition(messages, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  })

  return (
    <BodyPortal>
      <Styled.Root>
        {transitions((style, item) => (
          <ToastItem style={style} key={item.id} message={item} />
        ))}
      </Styled.Root>
    </BodyPortal>
  )
}
ToastContainer.displayName = TOAST_CONTAINER_NAME

export { ToastContainer }
