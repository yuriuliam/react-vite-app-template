/* eslint-disable react-refresh/only-export-components */
import {
  LexicalComposer,
  type InitialConfigType,
} from '@lexical/react/LexicalComposer'

type LexicalComposerProps = Omit<
  React.ComponentProps<typeof LexicalComposer>,
  'initialConfig'
>

const createRichTextEditorComposer = (initialConfig: InitialConfigType) => {
  const EditorComposer: React.FC<LexicalComposerProps> = ({ children }) => {
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
export type { LexicalComposerProps }
