import { createRichTextEditor } from '@/data/editors/core/createRichTextEditor'

import { getLoggerInstance } from '@/infra/logger/core/getLoggerInstance'

import type { LexicalEditor } from 'lexical'

const rteLogger = getLoggerInstance('rich-text-editor')

const onError = (error: Error, editor: LexicalEditor) => {
  rteLogger.error({
    name: 'Rich Text Editor',
    content: 'Something went wrong with the Editor',
    data: {
      error,
      editor: editor.toJSON(),
    },
  })
}

const RichTextEditor = createRichTextEditor({ namespace: 'base', onError })

export { RichTextEditor }
