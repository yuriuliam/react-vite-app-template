import React from 'react'

import { timeDisplayInMs } from '@/data/text/use-cases/timeDisplayInMs'

import { useCallbackRef } from '@/infra/react/hooks/useCallbackRef'
import { getComponentDisplayName } from '@/infra/react/utils/getComponentDisplayName'

import { useLogger } from '../hooks/useLogger'

const profiled = <TC extends React.ComponentType<any>>(Component: TC) => {
  const componentName = getComponentDisplayName(Component)

  const ComponentWithEnv = React.forwardRef<
    React.ComponentRef<TC>,
    React.ComponentProps<TC>
  >(({ ...props }, ref) => {
    const profilerId = React.useId()
    const logger = useLogger('hocs:profiled')

    const onRender = useCallbackRef<React.ProfilerOnRenderCallback>(
      (_id, phase, actualDuration, baseDuration) =>
        void logger.info({
          title: componentName,
          content: 'Component Render Trigger',
          data: {
            phase,
            actualDuration: timeDisplayInMs(actualDuration),
            baseDuration: timeDisplayInMs(baseDuration),
          },
          style: 'default',
        }),
    )

    return (
      <React.Profiler id={profilerId} onRender={onRender}>
        <Component {...Object.assign({} as any, props, { ref })} />
      </React.Profiler>
    )
  })
  ComponentWithEnv.displayName = `profiled(${componentName})`

  return ComponentWithEnv
}

export { profiled }
