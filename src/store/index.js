import Vue from 'vue'
import Vuex from 'vuex'

//注册vuex
Vue.use(Vuex)

//创建并导出一个vuex实例
export default new Vuex.Store({
  state: {
    //创建一个数组用于储存购物车中的信息
    isBuyProductList:[],
    totle: 0
  },
  mutations: {

    //1.改变商品的选中状态
    isCheck(state, index) {
      state.isBuyProductList[index].checked = !state.isBuyProductList[index].checked
    },
    //2.把购物车中的商品全部设为选中或者全部选中
    allCheckOr(state) {
      if(state.isBuyProductList.filter(value => {
        if(value.checked){
          return value
        }
      }).length === state.isBuyProductList.length){
        for(let item of state.isBuyProductList){
          item.checked = false
        }
      }else{
        for(let item of state.isBuyProductList){
          item.checked = true
        }
      }
    }
  },

  // getters相当于组件中的计算属性computed
  getters: {
    //1.计算出购物车中商品的数量
    getCartCount(state) {
      return state.isBuyProductList.length
    },
    //2.返回购物车中的商品信息
    getCartInfo(state) {
      return state.isBuyProductList
    },
    //3.计算出当前购物车的总价
    getTotlePrice(state) {
      state.totle = 0
      for(let i=0; i<state.isBuyProductList.length; i++){
        if(state.isBuyProductList[i].checked){
          state.totle += state.isBuyProductList[i].price * state.isBuyProductList[i].count
        }
      }
      return state.totle.toFixed(2)
    },
    //4.判断当前购物车是否全选
    isCheckedAll(state) {
      return state.isBuyProductList.filter(value => {
        if(!value.checked){
          return value
        }
      }).length === 0
    },
    //5.计算出当前购物车中被勾选的数量
    getCheckCount(state) {
      for(let item of state.isBuyProductList){
        return state.isBuyProductList.filter(value => {
          if(value.checked){
            return value
          }
        }).length
      }
    }
  },
  actions: {
    //1.创建一个方法用于改变state中的数据
    asyncAddproductInfo(context, payload) {
      return new Promise((resolve, reject) => {
        let oldProduct = null
        for(let item of context.state.isBuyProductList){
          if(item.iid == payload.iid){
            oldProduct = item
          }
        }

        if(oldProduct){  //数量+1
          oldProduct.count += 1
          resolve('当前商品数量+1')
        }else{  //添加新的商品
          payload.checked = true
          payload.count = 1
          context.state.isBuyProductList.push(payload)
          resolve('成功添加新商品')
        }
      })
    },
  },
  modules: {
  }
})
