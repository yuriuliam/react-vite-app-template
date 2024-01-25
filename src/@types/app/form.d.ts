import type React from 'react'

declare global {
  declare namespace App.Infra.Form {
    interface IBaseFormField<TValue> {
      name: string
      ref?: any | undefined
      persist?: boolean | undefined
      setValue?: ((ref: any, value: TValue) => void) | undefined
      clearValue?: ((ref: any, newValue: TValue) => void) | undefined
    }

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

    type FormHandleSubmitFn = (event?: React.FormEvent<HTMLFormElement>) => void

    type FormOnSubmitFn<TData = any> = (
      data: TData,
      helpers: any,
      event?: React.FormEvent<HTMLFormElement> | undefined,
    ) => void | Promise<void>

    interface IFormContextData {
      initialData: Record<string, any>
      errors: App.Infra.Form.FormErrors
      scopePath: string
      registerField: <TValue>(field: App.Infra.Form.FormField<TValue>) => void
      unregisterField: (name: string) => void
      clearFieldError: (fieldName: string) => void
      handleSubmit: React.FormEventHandler<HTMLFormElement>
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

    interface IFormProviderProps {
      initialData?: Record<string, any>
      children: React.ReactNode
      onSubmit: App.Infra.Form.FormOnSubmitFn
    }
  }
}

export = global
