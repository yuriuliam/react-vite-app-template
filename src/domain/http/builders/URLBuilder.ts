import { SchemaBuilder } from '@/domain/shared/builders/SchemaBuilder'

type URLOptions = {
  baseUrl: string
  uri?: string | undefined
  searchParams?: URLSearchParams | undefined
}

class URLBuilder extends SchemaBuilder<URLOptions, URL> {
  public static create(base: URLOptions | URLBuilder) {
    if (base instanceof URLBuilder) return base.copy()

    return new URLBuilder(base)
  }

  public build() {
    const searchParams = this.options.searchParams ?? new URLSearchParams()
    const uri = this.options.uri || ''
    const finalUri = `${uri}?${searchParams.toString()}`

    return new URL(finalUri, this.options.baseUrl)
  }

  public copy() {
    return new URLBuilder(structuredClone(this.options))
  }

  public uri(uri?: URLOptions['uri']) {
    return this.assign('uri', uri)
  }

  public searchParams(params?: URLOptions['searchParams']) {
    return this.assign('searchParams', structuredClone(params))
  }
}

export { URLBuilder }
