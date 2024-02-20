import React from 'react'

import { FormContextProvider, useForm } from '../../contexts/form/context'

const SCOPE_NAME = 'Modules.Forms.Components.Scope'

type ScopeProps = {
  path: string
}

const Scope: React.PFC<ScopeProps> = ({ children, path }) => {
  const { scopePath, ...form } = useForm(SCOPE_NAME)

  return (
    <FormContextProvider
      {...form}
      scopePath={scopePath.concat(scopePath ? `.${path}` : path)}
    >
      {children}
    </FormContextProvider>
  )
}
Scope.displayName = SCOPE_NAME

export { Scope }
