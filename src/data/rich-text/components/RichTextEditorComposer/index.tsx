import { type LexicalEditor } from 'lexical'

import { getLoggerInstance } from '@/data/logger/use-cases/getLoggerInstance'

import { createRichTextEditorComposer } from '@/infra/rich-text/use-cases/createRichTextEditorComposer'

const rteLogger = getLoggerInstance('infra', 'rich-text')

const onError = (error: Error, editor: LexicalEditor) => {
  rteLogger.error({
    name: 'Rich Text Editor',
    content: 'Something went wrong with the Editor',
    data: { error, editor },
  })
}

const RichTextEditorComposer = createRichTextEditorComposer({
  namespace: 'rte',
  onError,
})

export { RichTextEditorComposer }
