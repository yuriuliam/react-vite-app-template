import type { LexicalComposer } from '@lexical/react/LexicalComposer'

declare global {
  declare namespace App.Modules.Editor {
    type LexicalComposerProps = Omit<
      React.ComponentProps<typeof LexicalComposer>,
      'initialConfig'
    >
  }
}

export = global
