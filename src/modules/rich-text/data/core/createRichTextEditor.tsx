import React from 'react'

import { composeChildren } from '@/modules/react/data/core/composeChildren'

import '@lexical/react/LexicalAutoLinkPlugin'

type EditorProps = {
  children: App.MaybeArray<React.ReactElement<any, any>>
}

const createRichTextEditor = (
  EditorComposer: React.FC<App.Modules.Editor.LexicalComposerProps>,
) => {
  const createComposer = React.createElement.bind(React, EditorComposer)

  const Editor: React.FC<EditorProps> = ({ children }) =>
    createComposer(null, ...composeChildren(children))
  Editor.displayName = `Modules.Editors.RichTextEditor`

  return Editor
}

export { createRichTextEditor }
