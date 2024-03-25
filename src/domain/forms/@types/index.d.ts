import type React from 'react'

interface IBaseFormField<TValue> {
  name: string
  ref?: any | undefined
  persist?: boolean | undefined
  setValue?: ((ref: any, value: TValue) => void) | undefined
  clearValue?: ((ref: any, newValue: TValue) => void) | undefined
}

declare global {
  declare namespace App.Domain.Form {
    interface IFunctionFormField<TValue> extends IBaseFormField<TValue> {
      path?: undefined
      getValue: (ref: any) => TValue
    }

    interface IPathFormField<TValue> extends IBaseFormField<TValue> {
      path: string
      getValue?: undefined
    }

    type FormData = Record<string, any>

    type FormErrors = Record<string, string | undefined>

    type FormField<TValue = any> =
      | IPathFormField<TValue>
      | IFunctionFormField<TValue>

    type HandleSubmitFn = (
      evt?: globalThis.React.FormEvent<HTMLFormElement> | undefined,
    ) => void

    type OnSubmitFn<TData = any> = (
      data: TData,
      helpers: any,
      event?: globalThis.React.FormEvent<HTMLFormElement> | undefined,
    ) => void | Promise<void>

    interface IFormContextData {
      initialData: Record<string, any>
      errors: App.Domain.Form.FormErrors
      scopePath: string
      registerField: <TValue>(field: App.Domain.Form.FormField<TValue>) => void
      unregisterField: (name: string) => void
      clearFieldError: (fieldName: string) => void
      handleSubmit: globalThis.React.FormEventHandler<HTMLFormElement>
    }

    interface IFormHandlers {
      getFieldValue: (fieldName: string) => any
      setFieldValue: (fieldName: string, value: any) => undefined | boolean
      getFieldError: (fieldName: string) => string | undefined
      setFieldError: (fieldName: string, error: string) => void
      clearField: (fieldName: string) => void
      getFieldRef: (fieldName: string) => any
      getData: () => FormData
      setData: (data: FormData) => void
      getErrors: () => FormErrors
      setErrors: (errors: FormErrors) => void
      reset: (data?: FormData) => void
      submitForm: () => void
    }

    type FormProviderProps = {
      initialData?: Record<string, any>
      children: globalThis.React.ReactNode
      onSubmit: App.Domain.Form.OnSubmitFn
    }
  }
}

export = global
