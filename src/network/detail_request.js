//导入总网络请求模块
import {request2} from './request.js'

//1.请求详情页的信息
export function datailNavDataRequest(iid) {
  return request2({
    url: '/api/z8/detail',
    params: {
      iid
    }
  })
}

//2.请求详情页的推荐信息
export function detailRecommentRequest() {
  return request2({
    url: '/api/z8/recommend'
  })
}

//导出一个类，用于整合数据,相当于es5中的构造函数
export class goodsInfo {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.realPrice = itemInfo.lowNowPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
    }
}


//导出一个类，整合数据
export class shopsInfo {
  constructor(shopInfo){
    this.allGoodsUrl = shopInfo.allGoodsUrl
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

//导出的类用于整合参数数据
export class goodsParam {
  constructor(info, rule){
    this.image = info.image ? info.images[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
  }
}
