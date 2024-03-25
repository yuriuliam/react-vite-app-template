import React from 'react'

type EditorProps = {
  children: React.ReactNode
}

const createRichTextEditor = (EditorComposer: React.PFC) => {
  const Editor: React.FC<EditorProps> = ({ children }) => (
    <EditorComposer>{children}</EditorComposer>
  )
  Editor.displayName = `Data.RichText.RTE`

  return Editor
}

export { createRichTextEditor }
