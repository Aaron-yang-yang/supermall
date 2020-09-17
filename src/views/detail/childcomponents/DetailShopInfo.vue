<template>
  <div class="shop-info" v-if="Object.keys(shops).length !== 0">
      <div class="shop-base">
        <a :href="shops.allGoodsUrl">
          <img :src='shops.logo' alt="商家头像">
          <span>{{shops.name}}</span>
        </a>
      </div>
      <div class="shop-millde">
        <div class="left">
          <p>{{shops.sells | sellCounterFilter}}</p>
          <p>总销量</p>
        </div>
        <div class="millde">
          <p>{{shops.goodsCount}}</p>
          <p>全部宝贝</p>
        </div>
        <div class="right">
          <p>{{shops.score[0].name}} : <span class="score" :class="{'scorebetter':shops.score[0].isBetter}">{{shops.score[0].score.toFixed(2)}}</span> <span class="word" :class="{'wordbetter':shops.score[0].isBetter}">{{shops.score[0].isBetter? '高' : '低'}}</span></p>
          <p>{{shops.score[1].name}} : <span class="score" :class="{'scorebetter':shops.score[1].isBetter}">{{shops.score[1].score.toFixed(2)}}</span> <span class="word" :class="{'wordbetter':shops.score[1].isBetter}">{{shops.score[1].isBetter? '高' : '低'}}</span></p>
          <p>{{shops.score[2].name}} : <span class="score" :class="{'scorebetter':shops.score[2].isBetter}">{{shops.score[2].score.toFixed(2)}}</span> <span class="word" :class="{'wordbetter':shops.score[2].isBetter}">{{shops.score[2].isBetter? '高' : '低'}}</span></p>
        </div>
      </div>
      <div class="shop-bottom">
        <a :href="shops.allGoodsUrl">
          <span>进店逛逛</span>
        </a>
      </div>
  </div>
</template>

<script>
  export default {
    name:'DetailShopInfo',
    props: {
      shops: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      sellCounterFilter(value) {
        if(value<10000){
          return value
        }else{
          return (value/10000).toFixed(1) + '万'
        }
      }
    }
  }
</script>

<style scoped>
  .shop-info{
    padding: 1.5625rem 0.5rem;
    border-bottom: 0.3125rem solid #f2f5f8;
  }
  .shop-base a{
    display: flex;
  }
  .shop-base img{
    width: 4rem;
    height: 4rem;
    border: 0.0625rem solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }
  .shop-base span{
    line-height: 4rem;
    text-align: center;
    margin-left: 0.625rem;
  }
  .shop-millde{
    display: flex;
    margin-top: 1.5rem;
  }
  .shop-millde .left{
    flex: 1;
    text-align: center;
    line-height: 1.6875rem;
  }
  .shop-millde .millde{
    flex: 1;
    text-align: center;
    line-height: 1.6875rem;
    border-right: 0.125rem solid #000000;
  }
  .shop-millde .right{
    flex: 2;
    text-align: center;
    line-height: 1.6875rem;
  }
  .shop-millde .right .score{
    color: green;
  }
  .shop-millde .right .word{
    background-color: green;
    color: white;
    margin-left: 1.875rem;
  }
  .shop-millde .right .wordbetter{
    background-color: red;
    color: white;
  }
  .shop-millde .right .scorebetter{
    color: red;
  }
  .shop-bottom {
    margin-top: 0.625rem;
    text-align: center;
  }
  .shop-bottom span{
    font-size: 0.875rem;
    line-height: 1.875rem;
    display: inline-block;
    width: 9.375rem;
    height: 1.875rem;
    border-radius: 0.625rem;
    background-color: #f2f5f8;
  }
</style>
