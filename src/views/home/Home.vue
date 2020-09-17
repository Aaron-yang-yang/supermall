<template>
  <div id='home'>
    <NavBar class="home-nav"><div slot="middle">购物街</div></NavBar>

    <TabControl :titals="['流行', '新款', '精选']"
    @tabclick='tabclick'
    class='tabcontrol specialTabControl'
    ref='tabControl1'
    v-show='isTabControlFixed'/>


    <Scroll class='wrapper'
            ref='scroll'
            :probetype='3'
            @scrollPosition='getScrollPosition'
            :pullUpLoad='true'
            @pullingUp='getMoreData'>

      <HomeSwiper
      :banners='banners'
      class='home-swiper'
      @bannarImageLoad='getBannerImgLoad'
      v-if='banners.length'/>

      <HomeRecommend :recommends='recommends'/>

      <FeatrueView/>

      <TabControl :titals="['流行', '新款', '精选']"
      @tabclick='tabclick'
      class='tabcontrol'
      ref='tabControl2'/>

          <GoodsItem :goodsdata='goods[currentindex].list' />
    </Scroll>
    <!-- 监听组件的点击需要加。native -->
    <BackTop @click.native='backClick' v-show='isShowBackTop'/>
  </div>
</template>

<script>

  import NavBar from '@/components/common/navbar/NavBar.vue'
  import Scroll from '@/components/common/scroll/Scroll.vue'

  import TabControl from '../../components/content/TabControl.vue'
  import GoodsItem from '../../components/content/GoodsItem.vue'
  // import BackTop from '../../components/content/BackTop.vue'

  import HomeSwiper from './childcomponents/HomeSwiper.vue'
  import HomeRecommend from './childcomponents/HomeRecommend.vue'
  import FeatrueView from './childcomponents/FeatrueView.vue'

  import {homeNavdataRequest} from '../../network/home_request.js'
  import {homeGoodsdataRequest} from '../../network/home_request.js'
  import {debounce} from '../../common/utils.js'

  //导入混入的数据
  import {backTopMixin} from '../../common/mixin.js'

  export default {
    name: 'Home',
    components: {

      NavBar,
      Scroll,

      TabControl,
      GoodsItem,
      // BackTop,

      HomeSwiper,
      HomeRecommend,
      FeatrueView
    },
    mixins: [backTopMixin],
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          sell: {page: 0, list: []}
        },
        currentindex: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabControlFixed: false,
        saveY: 0
      }
    },
    //路由进入时触发此函数
    activated() {
      //当再次进入此路由时，将保存的position.y赋值给scrollTo，让其跳转到上次离开的位置
      this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.scroll.refresh()
    },
    //路由离开时会触此函数
    deactivated() {
      //离开时将当前页面滚动的位置记录下来，
      //防止keep-alive因为BScroll的bug而无法记录离开的位置
      //虽然bug似乎已经修复，但是可以学习这种方法解决其他问题
      // this.$refs.scroll.scroll.on
    },
    // 一旦组件创建完成就向服务器发送数据请求
    created() {
      //1. 请求导航相关的数据，调用methods中的函数，将具体请求方法又封装到methods中
      this.homeNavdataRequest()

      //2.请求商品数据
      this.homeGoodsdataRequest('pop')
      this.homeGoodsdataRequest('new')
      this.homeGoodsdataRequest('sell')
    },
    mounted() {
      //1.组件创建完,并渲染完就开始监听图片加载事件,
      // 使用防抖限流
      const refresh = debounce(this.$refs.scroll.scroll,100)
      //从事件总线中得到该事件

      this.$bus.$on('itemImgLoad', (address) => {
        if(this.$route.path == address){
          refresh()
        }
      })
    },
    methods: {
      /**
       * 一·事件监听相关方法
       */
      //1.tabControl选择监听
      tabclick(index) {
        switch(index) {
          case 0:
          this.currentindex = 'pop'
          break
          case 1:
          this.currentindex = 'new'
          break
          case 2:
          this.currentindex = 'sell'
          break
        }
        this.$refs.tabControl1.currentindex = index
        this.$refs.tabControl2.currentindex = index
      },

      // 2.回到顶部图标的显示与隐藏
      getScrollPosition(position) {
        //当position滚到-1000时让isShowBackTop变成true，显示BackTop组件
        this.isShowBackTop = (-position.y) > 1000

        //决定tabControl是否吸顶
        this.isTabControlFixed = (-position.y) > this.tabOffsetTop + 44

        //将position.y数据保存
        this.saveY = position.y
      },
      // 3.上拉加载更多数据
      getMoreData() {
        this.homeGoodsdataRequest(this.currentindex)
        //当新的数据请求下来后，因为是异步请求，所以需要在请求完后对页面进行一次刷新，不然会出现无法滚动的bug
        this.$refs.scroll.scroll.refresh()
      },
      //4.接收轮播图子组件传递出来的图片加载事件
      getBannerImgLoad() {
        // $el用于获取组件中的元素，只有获取元素才能获取offsetTop属性
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },

      /**
       * 二·网络请求相关方法
       */

      // 1.导航栏相关数据请求
      homeNavdataRequest() {
        homeNavdataRequest().then(res => {
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        }).catch(err => {
        })
      },

      // 2.商品数据的请求
      homeGoodsdataRequest(type) {
        const page = this.goods[type].page + 1
        homeGoodsdataRequest(type, page).then(res => {
          //将数组形式的数据解构后放入goods中，此处用语法。。。res。data。data。list
          this.goods[type].list.push(...res.data.data.list)
          // 当继续请求数据时,就是自动请求page+1的数据
          this.goods[type].page += 1

          //当数据加载完后需要调用一次finishPullUp，才能再一次使用pullingUp
          this.$refs.scroll.scroll.finishPullUp()
        })
      }
    }

  }
</script>

<style scoped>
  #home{
    /* 让home的高度变成当前的视口的100% */
    height: 100vh;
  }
  .home-nav{
    background-color: red;
    color: white;
  }
  .home-swiper{
    margin-top: 2.75rem;
  }
  .wrapper{
    height: calc(100% - 93px);
    overflow: hidden;
  }
  .specialTabControl{
    position: fixed;
    right: 0;
    left: 0;
    top: 2.75rem;
    background-color: white;
    z-index: 1;
  }
</style>
