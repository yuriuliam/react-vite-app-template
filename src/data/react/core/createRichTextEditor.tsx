import {
  LexicalComposer,
  type InitialConfigType,
} from '@lexical/react/LexicalComposer'
import { ContentEditable as LexicalContentEditable } from '@lexical/react/LexicalContentEditable'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { HistoryPlugin as LexicalHistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'

const createRichTextEditor = (initialConfig: InitialConfigType) => {
  const Editor: React.FC = () => {
    return (
      <LexicalComposer initialConfig={initialConfig}>
        <PlainTextPlugin
          contentEditable={<LexicalContentEditable />}
          placeholder={<>Enter some text...</>}
          ErrorBoundary={LexicalErrorBoundary}
        />

        <LexicalHistoryPlugin />
      </LexicalComposer>
    )
  }
  Editor.displayName = `App:RichTextEditor(${initialConfig.namespace})`

  return Editor
}

export { createRichTextEditor }
