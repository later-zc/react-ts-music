// export const BASE_URL = 'http://codercba.com:9002'
// export const TIMEOUT = 10000
// console.log(import.meta)
// console.log(import.meta.env)
// console.log('VITE_NAME: ', import.meta.env.VITE_NAME)
// console.log('VITE_BASE_URL: ', import.meta.env.VITE_BASE_URL)

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://codercba.com:9002'
    : 'http://codercba.com:9002'

console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)
console.log('process.env: ', process.env)

export const TIMEOUT = 10000
export { BASE_URL }
