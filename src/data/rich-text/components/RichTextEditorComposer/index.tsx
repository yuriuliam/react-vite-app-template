import { getLoggerInstance } from '@/data/logger/use-cases/getLoggerInstance'

import { createRichTextEditorComposer } from '@/infra/rich-text/use-cases/createRichTextEditorComposer'

import type { LexicalEditor } from 'lexical'

const rteLogger = getLoggerInstance('infra:rich-text')

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
