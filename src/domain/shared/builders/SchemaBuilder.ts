abstract class SchemaBuilder<
  TSchema extends Record<any, any> | any[],
  TResult extends Record<any, any> | any[],
> {
  protected constructor(protected options: TSchema) {}

  public abstract build(): TResult

  public toJSON() {
    return this.options
  }

  protected add(value: any) {
    if (!Array.isArray(this.options)) return this

    this.options.push(value)

    return this
  }

  protected assign<TKey extends keyof TSchema>(key: TKey, value: any) {
    this.options = Object.assign({}, this.options, { [key]: value })

    return this
  }

  protected remove(value: any) {
    if (!Array.isArray(this.options)) return this

    this.options = this.options.filter(item => item !== value) as TSchema

    return this
  }
}

export { SchemaBuilder }
