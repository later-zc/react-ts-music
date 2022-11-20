import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { ZCRequestConfig } from './type'

class Request {
  instance: AxiosInstance

  constructor(config: ZCRequestConfig) {
    this.instance = axios.create(config)

    // requset顺序：越早添加，越晚执行（早添晚执）
    // response顺序：越早添加，越早执行（早添早执）
    // 这是axios内部规定的
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局请求成功拦截')
        return config
      },
      (err) => {
        console.log('全局请求失败拦截')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局响应成功拦截')
        return res.data
      },
      (err) => {
        console.log('全局响应成功拦截')
        return err.response.data
      }
    )

    // 类型缩小
    // if (config.interceptors) {
    //   this.instance.interceptors.request.use(
    //     config.interceptors.requestSuccessFn,
    //     config.interceptors.requestFailureFn
    //   )

    //   this.instance.interceptors.response.use(
    //     config.interceptors.responseSuccessFn,
    //     config.interceptors.responseFailureFn
    //   )
    // }

    // 可选链
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )

    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  request<T = any>(config: ZCRequestConfig<T>) {
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: ZCRequestConfig<T>) {
    return this.request({
      ...config,
      method: 'GET'
    })
  }

  post<T = any>(config: ZCRequestConfig<T>) {
    return this.request({
      ...config,
      method: 'POST'
    })
  }

  delete<T = any>(config: ZCRequestConfig<T>) {
    return this.request({
      ...config,
      method: 'DELETE'
    })
  }

  patch<T = any>(config: ZCRequestConfig<T>) {
    return this.request({
      ...config,
      method: 'PATCH'
    })
  }
}

export default Request
