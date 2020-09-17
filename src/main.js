import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//1.导入fastclick，解决移动端300毫秒的延迟
// import FastClick from 'fastclick'
//2.安装
// FastClick.attach(document.body)

//1.导入lazyload，图片懒加载插件
import vueLazyLoad from 'vue-lazyload'
//2.使用
Vue.use(vueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

//1.导入自己封装的toast插件
import toast from './components/common/toast/index.js'
//2.安装toast
Vue.use(toast)
Vue.config.productionTip = false

//在原型链上添加一个vue实例作为事件总线，用来传递事件信息
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
