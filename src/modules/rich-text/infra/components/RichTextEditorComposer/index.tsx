import { getLoggerInstance } from '@/modules/logger/infra/core/getLoggerInstance'
import { createRichTextEditorComposer } from '@/modules/rich-text/data/core/createRichTextEditorComposer'

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
