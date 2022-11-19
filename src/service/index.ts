import Request from './request'
import { BASE_URL, TIMEOUT } from './config'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestSuccessFn: (config) => {
      // const token = useLoginStore().accountInfo.token
      // if (config.headers && token)
      //   config.headers.Authorization = 'Bearer ' + token
      return config
    }
  }
})

export default request
