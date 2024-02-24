import React from 'react'

import { composeChildren } from '@/infra/react/use-cases/composeChildren'

type EditorProps = {
  children: App.MaybeArray<React.ReactElement<any, any>>
}

const createRichTextEditor = (EditorComposer: React.PFC) => {
  const createComposer = React.createElement.bind(React, EditorComposer)

  const Editor: React.FC<EditorProps> = ({ children }) =>
    createComposer(null, ...composeChildren(children))
  Editor.displayName = `Protocols.Editors.RichTextEditor`

  return Editor
}

export { createRichTextEditor }
