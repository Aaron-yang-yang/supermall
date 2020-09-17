//创建一个混入对象（回到顶部图标）

import BackTop from '../components/content/BackTop.vue'

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    //1.回到顶部
    backClick() {
      //回到坐标（0，0）位置，时间用500毫秒
      if(this.$refs.scroll){
        this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      }else{
        this.$refs.wrapper.scroll.scrollTo(0, 0, 500)
      }
      
    },
  }
}
