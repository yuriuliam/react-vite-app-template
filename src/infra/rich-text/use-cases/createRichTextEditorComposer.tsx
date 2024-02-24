import {
  LexicalComposer,
  type InitialConfigType,
} from '@lexical/react/LexicalComposer'

import { withProps } from '@/infra/react/hocs/withProps'

const createRichTextEditorComposer = (initialConfig: InitialConfigType) => {
  const EditorComposer = withProps(LexicalComposer, { initialConfig })
  EditorComposer.displayName = `Protocols.Editors.RichTextEditorComposer(${initialConfig.namespace})`

  return EditorComposer
}

export { createRichTextEditorComposer }
