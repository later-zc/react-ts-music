import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ZCInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface ZCRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ZCInterceptors<T>
}
