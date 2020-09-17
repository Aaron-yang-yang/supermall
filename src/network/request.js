import axios from 'axios'

// 总的网络请求
export function request1(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  return instance(config)
}

export function request2(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000',
    timeout: 5000
  })

  return instance(config)
}
