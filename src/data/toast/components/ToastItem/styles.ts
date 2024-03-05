import { animated } from '@react-spring/web'
import { css, styled } from 'styled-components'

interface IContainerProps {
  $type?: 'info' | 'success' | 'error' | undefined
  $hasDescription: boolean
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

const Root = styled(animated.div)<IContainerProps>`
  width: 360px;

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

  ${props => toastTypeVariations[props.$type ?? 'info']}

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
    !props.$hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`

export { Root }
