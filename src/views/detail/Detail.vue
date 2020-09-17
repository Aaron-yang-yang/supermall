<template>
  <div id="detail">
    <DetailNavBar @navBarClick='getNavBarClick' ref='navBar'/>
    <Scroll class='wrapper' ref='wrapper'
    :probetype='3'
    @scrollPosition='getScrollPosition'>
      <DetailSwiper :getTopImages='topImages' class='detailswiper'/>
      <DetailBaseInfo :goods='goodsInfo'/>
      <DetailShopInfo :shops='shopsInfo'/>
      <DetailGoodsInfo :detailGoodsInfo='detailInfo' @imagesLoad='getImagesLoad'/>
      <DetailParam :paramInfo='detailParam' ref='DetailParam'/>
      <DetailComment :commentInfo='commentInfo' ref='DetailComment'/>
      <GoodsItem :goodsdata='recommendInfo' ref='DetailGoodsItem'/>
    </Scroll>
    <!-- 监听组件的点击需要加。native -->
    <BackTop @click.native='backClick' v-show='isShowBackTop'/>
    <DetailBottomBar @addToCart='getAddToCart'/>
  </div>
</template>

<script>
  import Scroll from '@/components/common/scroll/Scroll.vue'
  import GoodsItem from '../../components/content/GoodsItem.vue'

  import DetailNavBar from './childcomponents/DetailNavBar.vue'
  import DetailSwiper from './childcomponents/DetailSwiper.vue'
  import DetailBaseInfo from './childcomponents/DetailBaseInfo.vue'
  import DetailShopInfo from './childcomponents/DetailShopInfo.vue'
  import DetailGoodsInfo from './childcomponents/DetailGoodsInfo.vue'
  import DetailParam from './childcomponents/DetailParam.vue'
  import DetailComment from './childcomponents/DetailComment.vue'
  import DetailBottomBar from './childcomponents/DetailBottomBar.vue'

  import {datailNavDataRequest, detailRecommentRequest, goodsInfo, shopsInfo, goodsParam} from '../../network/detail_request.js'

  import {debounce} from '../../common/utils.js'

  //导入混入的数据
  import {backTopMixin} from '../../common/mixin.js'

  export default {
    name: 'Detail',
    components: {
      Scroll,
      GoodsItem,

      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParam,
      DetailComment,
      DetailBottomBar
    },
    mixins: [backTopMixin],
    data() {
      return {
        iid: null,
        topImages: [],
        goodsInfo: {},
        shopsInfo: {},
        detailInfo: {},
        detailParam: {},
        commentInfo: {},
        recommendInfo: [],
        navBarTopY: [],
        navBarTopYEscopy: [],
        currentIndex: 0
      }
    },
    created() {
      //1.将home传入的数据保存
      this.iid = this.$route.params.iid

      //2.请求iid对应的商品详情页数据
      datailNavDataRequest(this.iid).then(res => {
        //(1).取出轮播图数据存储在topImages中
        this.topImages = res.data.result.itemInfo.topImages

        //(2).取出商品基本信息
        this.goodsInfo = new goodsInfo(res.data.result.itemInfo, res.data.result.columns, res.data.result.shopInfo.services)

        //(3).取出商家基本信息
        this.shopsInfo = new shopsInfo(res.data.result.shopInfo)

        //(4).取出商品描述信息
        this.detailInfo = res.data.result.detailInfo

        //(5).取出商品参数信息
        this.detailParam = new goodsParam(res.data.result.itemParams.info, res.data.result.itemParams.rule)

        //(6).取出用户评论信息
        this.commentInfo = res.data.result.rate.list[0]
      }).catch(err => {
        })

      //3.请求详情页推荐数据
      detailRecommentRequest().then(res => {
        this.recommendInfo = res.data.data.list
      }).catch(err => {
        console.log(err)
      })
    },
    mounted() {
      //限流函数
      const refresh = debounce(this.$refs.wrapper.scroll, 100)
      //从事件总线中得到该事件
      this.$bus.$on('itemImgLoad', (address) => {
        //判断当前路径是否是需要刷新的页面
        if(this.$route.path == address){
          refresh()
        }
      })
    },
    methods: {
      //1.监听图片加载完成
      getImagesLoad() {
        this.$refs.wrapper.scroll.refresh()

        //当图片加载完成后，计算各个板块的offset值
        this.navBarTopY = []
        this.navBarTopY.push(0)
        this.navBarTopY.push(this.$refs.DetailParam.$el.offsetTop + 88)
        this.navBarTopY.push(this.$refs.DetailComment.$el.offsetTop + 88)
        this.navBarTopY.push(this.$refs.DetailGoodsItem.$el.offsetTop + 88)

        //备份一份数据,并且多一个很大的数字
        this.navBarTopYEscopy = this.navBarTopY.push(Number.MAX_VALUE)
      },

      //2.监听导航栏的点击
      getNavBarClick(index) {
        this.$refs.wrapper.scroll.scrollTo(0, -this.navBarTopY[index], 400)
      },

      //3.得到scroll的position，根据position改变导航栏
      getScrollPosition(position) {
        for(let i=0; i<=3; i++){
          if(this.currentIndex !== i && (-position.y > this.navBarTopY[i] && -position.y < this.navBarTopY[i+1])){
            this.currentIndex = i
            this.$refs.navBar.currentIndex = this.currentIndex
          }
        }

        //当position滚到-1000时让isShowBackTop变成true，显示BackTop组件
        this.isShowBackTop = (-position.y) > 1000
      },

      //4.得到点击加入购物车的点击事件
      getAddToCart() {
        //（1）.将点击的商品的信息整合到一个对象保存到vuex中共购物车组件使用
        const product = {
          image: this.topImages[0],
          title: this.goodsInfo.title,
          desc: this.goodsInfo.desc,
          iid: this.iid,
          price: this.goodsInfo.realPrice,
        }

        //（2）.将对象传递给vuex
        this.$store.dispatch('asyncAddproductInfo', product).then(res => {
          //显示添加购物车成功
          this.$toast.show(res, 1000)
        })
      }
    }
  }
</script>

<style scoped>
  #detail{
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: white;
  }
  .detailswiper{
    margin-top: 5.5rem;
  }
  .wrapper{
    height: calc(100% - 44px);
    overflow: hidden;
  }
</style>
