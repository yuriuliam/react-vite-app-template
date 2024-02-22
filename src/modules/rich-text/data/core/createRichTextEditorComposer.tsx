import {
  LexicalComposer,
  type InitialConfigType,
} from '@lexical/react/LexicalComposer'

import { withProps } from '@/modules/react/infra/hocs/withProps'

const createRichTextEditorComposer = (initialConfig: InitialConfigType) => {
  const EditorComposer = withProps(LexicalComposer, { initialConfig })
  EditorComposer.displayName = `Modules.Editors.RichTextEditorComposer(${initialConfig.namespace})`

  return EditorComposer
}

export { createRichTextEditorComposer }
