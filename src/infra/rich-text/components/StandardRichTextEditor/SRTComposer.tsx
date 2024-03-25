import { type LexicalEditor } from 'lexical'

import { createRichTextEditorComposer } from '@/data/rich-text/subjects/createRichTextEditorComposer'

import { getLoggerInstance } from '@/infra/logger/getLoggerInstance'

const rteLogger = getLoggerInstance('infra', 'rich-text')

const onError = (error: Error, editor: LexicalEditor) => {
  rteLogger.error({
    name: 'Rich Text Editor',
    content: 'Something went wrong with the Editor',
    data: { error, editor },
  })
}

const SRTComposer = createRichTextEditorComposer({
  namespace: 'rte',
  onError,
})

export { SRTComposer }
