import { css, keyframes, styled } from 'styled-components'

import { TOAST_TTL_IN_MS } from '@/infra/toast/config/toast'

interface IContainerProps {
  type?: 'info' | 'success' | 'error' | undefined
  hasDescription: boolean
}

const toastTypeVariations = {
  info: css`
    background: var(--sky-12);
    color: var(--sky-7);
  `,
  success: css`
    background: var(--grass-12);
    color: var(--grass-7);
  `,
  error: css`
    background: var(--ruby-12);
    color: var(--ruby-7);
  `,
}

const spawnToast = keyframes`
  from {
    right: -120%;
    opacity: 0;
  }

  to {
    right: 0%;
    opacity: 1;
  }
`

const destroyToast = keyframes`
  from {
    right: 0%;
    opacity: 1;
  }

  to {
    right: -120%;
    opacity: 0;
  }
`

const Root = styled.div<IContainerProps>`
  width: 360px;

  animation:
    ${spawnToast} 250ms ease-in 0s forwards 1,
    ${destroyToast} 250ms ease-in ${TOAST_TTL_IN_MS - 250}ms forwards 1;
  /* name duration timing-function delay iteration-count direction fill-mode; */

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin: 4px 12px 0 0;
    width: 1.125rem;
    height: 1.125rem;
  }

  ${props => toastTypeVariations[props.type ?? 'info']}

  div {
    flex: 1;

    p {
      margin-top: 0.25rem;
      font-size: 0.875rem;
      opacity: 0.8;
      line-height: 1.5rem;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0ch;
    background: transparent;
    color: inherit;

    & > svg {
      width: 1.125rem;
      height: 1.125rem;
    }
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`

export { Root }
