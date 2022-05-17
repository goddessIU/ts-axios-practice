import { buildURL } from './helpers/url'
import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}

export default axios
