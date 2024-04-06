declare global {
  declare namespace App.Storybook {
    type StorybookDecorator = (Story: React.FC) => React.ReactNode
  }
}

export = global
