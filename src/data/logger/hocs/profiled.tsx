import React from 'react'

import { SECOND_IN_MS } from '@/config/time'

import { timeDisplayInSecs } from '@/data/text/use-cases/timeDisplayInSecs'

import { useCallbackRef } from '@/infra/react/hooks/useCallbackRef'

import { getComponentDisplayName } from '@/shared/utils/react'

import { useLogger } from '../hooks/useLogger'

const profiled = <TC extends React.ComponentType<any>>(Component: TC) => {
  const componentName = getComponentDisplayName(Component)

  const ComponentWithEnv = React.forwardRef<
    React.ComponentRef<TC>,
    React.ComponentProps<TC>
  >(({ ...props }, ref) => {
    const profilerId = React.useId()
    const logger = useLogger('data', 'logger', 'hocs', 'profiled')

    const onRender = useCallbackRef<React.ProfilerOnRenderCallback>(
      (_id, phase, actualDuration, baseDuration) =>
        void logger.info({
          title: componentName,
          content: 'Component Render Trigger',
          data: {
            phase,
            actualDuration: timeDisplayInSecs(actualDuration / SECOND_IN_MS),
            baseDuration: timeDisplayInSecs(baseDuration / SECOND_IN_MS),
          },
          style: 'default',
        }),
    )

    return (
      <React.Profiler id={profilerId} onRender={onRender}>
        <Component {...(props as any)} ref={ref} />
      </React.Profiler>
    )
  })
  ComponentWithEnv.displayName = `profiled(${componentName})`

  return ComponentWithEnv
}

export { profiled }
