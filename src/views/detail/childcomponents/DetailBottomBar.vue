<template>
  <div class="bottom-bar">
    <div class="service">
      <div class="service-img">
        <img src="../../../assets/img/detail/detail_bottom.png">
      </div>
      <p>客服</p>
    </div>

    <div class="shop">
      <div class="shop-img">
        <img src="../../../assets/img/detail/detail_bottom.png">
      </div>
      <p>店铺</p>
    </div>

    <div class="collect" @click="changCollect">
      <div class="collect-img">
        <img src="../../../assets/img/detail/detail_bottom.png" :class="{iscollect:isCollect}">
      </div>
      <p>收藏</p>
    </div>

    <div class="add-cart" @click="addToCart">
      <div class="add-cart-img">
        <img src="../../../assets/img/detail/detail_bottom.png">
      </div>
      <p>加入购物车</p>
    </div>

    <div class="buy">
      <div class="buy-img">
        <img src="../../../assets/img/detail/detail_bottom.png">
      </div>
      <p>购买</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    data() {
      return {
        isCollect: false
      }
    },
    methods: {
      changCollect() {
        this.isCollect = ~this.isCollect
      },
      addToCart() {
        this.$emit('addToCart')
      }
    }
  }

</script>

<style scoped>
  .bottom-bar{
    background-color: white;
    position: relative;
    height: 4.3125rem;
    top: -4.3125rem;
    display: flex;
    /* padding: 0 0.625rem; */
  }

  .bottom-bar .service{
    position: relative;
    float: left;
    flex: 1;
  }
  .bottom-bar .service .service-img{
    height: 2.75rem;
    width: 2.75rem;
    overflow: hidden;
    position: absolute;
  }
  .bottom-bar .service img{
    position: absolute;
    top: -6.5625rem;
  }
  .bottom-bar .service p{
    position: absolute;
    top: 2.75rem;
    left: 0.3125rem;
  }

  .bottom-bar .shop{
    position: relative;
    float: left;
    flex: 1;
  }
  .bottom-bar .shop .shop-img{
    height: 2.75rem;
    width: 2.75rem;
    overflow: hidden;
    position: absolute;
  }
  .bottom-bar .shop img{
    position: absolute;
    top: -12.1875rem
  }
  .bottom-bar .shop p{
    position: absolute;
    top: 2.75rem;
    left: 0.3125rem;
  }

  .bottom-bar .collect{
    position: relative;
    float: left;
    flex: 1;
  }
  .bottom-bar .collect .collect-img{
    height: 2.75rem;
    width: 2.75rem;
    overflow: hidden;
    position: absolute;
  }
 .bottom-bar .collect img{
    position: absolute;
    top: 0.1875rem;
  }
  .bottom-bar .collect .iscollect{
    position: absolute;
    top: -3.3125rem
  }
  .bottom-bar .collect p{
    position: absolute;
    top: 2.75rem;
    left: 0.3125rem;
  }

  .bottom-bar .add-cart{
    position: relative;
    float: left;
    flex: 1.7;
    background-color: yellow;
  }
  .bottom-bar .add-cart .add-cart-img{
    height: 2.75rem;
    width: 2.75rem;
    overflow: hidden;
    position: absolute;
    left: 2.0625rem;
  }
  .bottom-bar .add-cart img{
    position: absolute;
    top: -9.5rem;
  }
  .bottom-bar .add-cart p{
    position: absolute;
    top: 2.75rem;
    left: 0.3125rem;
  }

  .bottom-bar .buy{
    position: relative;
    float: left;
    flex: 1.3;
    background-color: #fd68a8;
  }
  .bottom-bar .buy .buy-img{
    height: 2.75rem;
    width: 2.75rem;
    overflow: hidden;
    position: absolute;
    left: 1.0625rem;
  }
  .bottom-bar .buy img{
    position: absolute;
    top: -14.75rem;
    left: 0.375rem;
  }
  .bottom-bar .buy p{
    position: absolute;
    top: 2.75rem;
    left: 1.375rem
  }

</style>
