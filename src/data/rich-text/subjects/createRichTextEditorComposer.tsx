import {
  LexicalComposer,
  type InitialConfigType,
} from '@lexical/react/LexicalComposer'

import { withProps } from '@/shared/hocs/withProps'

const createRichTextEditorComposer = (initialConfig: InitialConfigType) => {
  const EditorComposer = withProps(LexicalComposer, { initialConfig })
  EditorComposer.displayName = `Data.RichText.RTEComposer(${initialConfig.namespace})`

  return EditorComposer
}

export { createRichTextEditorComposer }
