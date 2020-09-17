// 导入总的网络请求实例模块
import {request1} from './request.js'
import {request2} from './request.js'

//再对home页面的各种不同的网络请求做一次封装
export function homeNavdataRequest() {
  return request1({
    url: '/home/multidata'
  })
}

export function homeGoodsdataRequest(type, page) {
  return request2({
    url: '/api/z8/home/data',
    params: {
      type,
      page
    }
  })
}
