<template>
  <div class="shop-cart">
    <ShopcartNavBar/>

    <Scroll class='wrapper' ref='wrapper'>
      <ShopInfo/>
    </Scroll>

    <ShopBottom/>
  </div>
</template>

<script>
  import ShopcartNavBar from './childcomponents/ShopcartNavBar.vue'
  import ShopInfo from './childcomponents/ShopInfo.vue'
  import ShopBottom from './childcomponents/ShopBottom.vue'

  import Scroll from '@/components/common/scroll/Scroll.vue'

  export default {
    name: 'Shopcart',
    components: {
      ShopcartNavBar,
      ShopInfo,
      ShopBottom,

      Scroll
    },
    activated() {
      this.$refs.wrapper.scroll.refresh()
    }
  }
</script>

<style scoped>
  .shop-cart{
    height: 100vh;
  }
  .wrapper{
    height: calc(100% - 44px - 49px - 40px);
  }
</style>
