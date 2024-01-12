import { render, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { createContext } from '@/data/react/createContext'

import { createWrapper } from '#/__mocks__/react/wrappers'

describe('createContext', () => {
  const TEST_NAME = 'Tests.createContext'
  const CONSUMER_NAME = 'Tests.Provider'

  it('should return a provider and a hook which consumes the context', () => {
    const [Provider, useProvider] = createContext(null, TEST_NAME)

    const { result: provider } = renderHook(() => useProvider(CONSUMER_NAME), {
      wrapper: createWrapper(props => <Provider {...props} hello="world" />),
    })

    expect(provider.current).toBeTruthy()
    expect(provider.current).toHaveProperty('hello')
    expect(provider.current.hello).toBe('world')
  })

  it('should return a consumer as a third parameter of the context creation', () => {
    const [Provider, , Consumer] = createContext(null, TEST_NAME)

    const testData = { foo: 'bar' }

    const component = render(
      <div data-testid="consumer-container">
        <Consumer>{data => data.foo}</Consumer>
      </div>,
      {
        wrapper: createWrapper(props => <Provider {...props} {...testData} />),
      },
    )

    const element = component.getByTestId('consumer-container')

    expect(element.innerHTML).toBe(testData.foo)
  })

  it('should return an empty object once no parameters are passed', () => {
    const [Provider, useProvider] = createContext({}, TEST_NAME)

    const ProviderWrapper: React.PFC = ({ children }) => {
      return <Provider>{children}</Provider>
    }

    const { result: provider } = renderHook(() => useProvider(CONSUMER_NAME), {
      wrapper: ProviderWrapper,
    })

    expect(provider.current).toEqual({})
  })

  it('should throw an error when the hook is called without a provider', () => {
    const [, useProvider] = createContext(null, TEST_NAME)

    expect(() => renderHook(() => useProvider(CONSUMER_NAME))).toThrowError(
      `${CONSUMER_NAME} must be wrapped within ${TEST_NAME} or contain a truthy initial value`,
    )
  })
})
