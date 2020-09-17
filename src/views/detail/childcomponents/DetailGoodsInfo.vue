<template>
  <div class="detail-goods-info" v-if="Object.keys(detailGoodsInfo).length !== 0">
    <div v-for="item in detailGoodsInfo.detailImage">
      <div class="star"></div>
      <p>{{item.key}}</p>
      <div class="end"></div>
      <img v-for="imgs in item.list" :src="imgs" alt="模特图片" @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailGoodsInfo',
    props: {
      detailGoodsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        imgLength: 0,
        imgCount: 0
      }
    },
    methods: {
      imgLoad() {
        if(++this.imgCount === this.imgLength) {
          this.$emit('imagesLoad')
        }
      }
    },
    //监听props中的数据变化，一旦发生变化就触发函数
    watch: {
      detailGoodsInfo() {
        this.imgLength = this.detailGoodsInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .detail-goods-info img{
    width: 100%;
  }
  .detail-goods-info .star{
    margin-top: 0.3125rem;
    width: 12rem;
    height: 0.125rem;
    background-color: #989f9f;
  }
  .detail-goods-info .end{
    margin-bottom: 0.3125rem;
    width: 12rem;
    height: 0.125rem;
    background-color: #989f9f;
    float: right;
  }
  .detail-goods-info p{
    line-height: 5rem;
    text-align: center;
  }
</style>
