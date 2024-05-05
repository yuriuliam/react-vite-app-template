import {
  type FieldPath as HookFormFieldPath,
  type RegisterOptions as HookFormRegisterOptions,
  type UseFormProps,
  type UseFormReturn,
  type SubmitHandler,
  type SubmitErrorHandler,
  type FieldValues,
  type DefaultValues,
} from 'react-hook-form'

import { type TextField } from '@radix-ui/themes'
import { type z } from 'zod'

type IteratorPathScoped<T> = T extends `${infer Prefix}.${number}`
  ? Prefix
  : never

type BaseFormContextData = UseFormReturn<any, any, any>

type FormOptions<TFields extends FieldValues, TContext> = Omit<
  UseFormProps<TFields, TContext>,
  'resolver'
> & {
  schema: z.Schema<TFields>
}

type FormInputRegistryOptions<TFields extends FieldValues> = Omit<
  HookFormRegisterOptions<TFields, HookFormFieldPath<TFields>>,
  'pattern' | 'valueAsNumber' | 'valueAsDate'
>

type HTMLFormProps = React.ComponentProps<'form'>
type HTMLInputProps = React.ComponentProps<'input'>
type RadixTextFieldProps = TextField.RootProps

type ControlledHTMLFormProps = Omit<
  HTMLFormProps,
  'onSubmit' | 'defaultValue' | keyof UseFormProps<any, any>
>
type ControlledRadixTextFieldProps = Omit<
  RadixTextFieldProps,
  'name' | keyof FormInputRegistryOptions<any>
> & {
  label?: string | undefined
}

type ControlledHTMLInputProps = Omit<
  HTMLInputProps,
  'name' | keyof FormInputRegistryOptions<any>
> & {
  label?: string | undefined
}

type FormRootProps<TFields extends FieldValues> = ControlledHTMLFormProps & {
  defaultValues?: DefaultValues<TFields>
  onValidSubmit: SubmitHandler<TFields>
  onInvalidSubmit?: SubmitErrorHandler<TFields>
}

type FormInputProps<TFields extends FieldValues> = ControlledHTMLInputProps & {
  name: HookFormFieldPath<TFields>
} & FormInputRegistryOptions<TFields>

type FormRadixTextFieldProps<TFields extends FieldValues> =
  ControlledRadixTextFieldProps & {
    name: HookFormFieldPath<TFields>
  } & FormInputRegistryOptions<TFields>

type FormIteratorScopeProps<
  TFields extends FieldValues = FieldValues,
  Path extends string = HookFormFieldPath<TFields>,
> = {
  path: IteratorPathScoped<Path>
  min?: number | undefined
  max?: number | undefined
} & {
  children?:
    | App.IndexedPredicateFn<
        `${IteratorPathScoped<Path>}.${number}`,
        React.ReactNode
      >
    | undefined
}

declare global {
  declare namespace App.Domain.Forms {
    interface IFormContextData extends BaseFormContextData {}

    type FormRootFC<TFields extends FieldValues = FieldValues> =
      globalThis.React.FC<FormRootProps<TFields>>

    type FormTextFieldFC<TFields extends FieldValues = FieldValues> =
      globalThis.React.FC<FormRadixTextFieldProps<TFields>>

    type FormInputFC<TFields extends FieldValues = FieldValues> =
      globalThis.React.FC<FormInputProps<TFields>>

    type FormIteratorScopeFC<TFields extends FieldValues = FieldValues> =
      globalThis.React.FC<FormIteratorScopeProps<TFields>>

    type FormComposer<TFields extends FieldValues = FieldValues> = {
      Root: FormRootFC<TFields>
      TextField: FormTextFieldFC<TFields>
      Input: FormInputFC<TFields>
      IteratorScope: FormIteratorScopeFC<TFields>
    }

    type UseFormHook<
      TFields extends FieldValues = FieldValues,
      TContext = any,
    > = (consumer: string) => UseFormReturn<TFields, TContext, undefined>

    type CreateFormFn = <TFields extends FieldValues, TContext>(
      formOptions: FormOptions<TFields, TContext>,
      componentName: string,
    ) => [Form: FormComposer<TFields>, useForm: UseFormHook<TFields, TContext>]
  }
}

export = global
