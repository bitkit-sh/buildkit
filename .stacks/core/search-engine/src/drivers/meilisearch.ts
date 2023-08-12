/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment */

import process from 'node:process'
import { log } from '@stacksjs/logging'
import { searchEngine } from '@stacksjs/config'
import { MeiliSearch } from 'meilisearch'

import { type SearchResponse } from 'meilisearch' // TODO: import from @stacksjs/types

interface SearchEngineOptions {
  host: string
  apiKey: string
}

function client(options?: SearchEngineOptions) {
  let host = searchEngine.meilisearch?.host
  let apiKey = searchEngine.meilisearch?.apiKey

  if (options?.host)
    host = options.host

  if (options?.apiKey)
    apiKey = options.apiKey

  if (!host) {
    log.error('Please specify a search engine host.')
    process.exit()
  }

  return new MeiliSearch({ host, apiKey })
}

async function search(index: string, params: any): Promise<SearchResponse<Record<string, any>>> {
  return await client()
    .index(index)
    .search(params.query, { limit: params.perPage, offset: params.page * params.perPage })
}

export {
  client,
  search,
}
