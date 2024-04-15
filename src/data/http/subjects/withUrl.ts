import { URLBuilder } from '@/domain/http/builders/URLBuilder'

const buildUrl = URLBuilder.create.bind(URLBuilder)

export { buildUrl as withUrl }
