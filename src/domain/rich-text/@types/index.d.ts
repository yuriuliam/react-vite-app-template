import { type LexicalEditor } from 'lexical'

declare global {
  declare namespace App.Domain.RichText {
    type RTEditor = LexicalEditor
  }
}

export = global
