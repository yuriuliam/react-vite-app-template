import {
  LexicalComposer,
  type InitialConfigType,
} from '@lexical/react/LexicalComposer'

const createRichTextEditorComposer = (initialConfig: InitialConfigType) => {
  const EditorComposer: React.PFC = ({ children }) => {
    return (
      <LexicalComposer initialConfig={initialConfig}>
        {children}
      </LexicalComposer>
    )
  }
  EditorComposer.displayName = `Modules.Editors.RichTextEditorComposer(${initialConfig.namespace})`

  return EditorComposer
}

export { createRichTextEditorComposer }
