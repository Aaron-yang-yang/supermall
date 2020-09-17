<template>
  <div class="goods">
    <div v-for="(item, index) in goodsdata" class="goodsitem">
      <div  @click="btnClick(index)">
        <!-- 在vue中，@load专门用于监听图片是否加载完成，原生js用img.onload = function(){}监听 -->
        <img v-lazy='showImg(item)' class="showimg" @load="imageLoad">
        <p>{{item.title}}</p>
        <span class="price">{{item.price}}</span>
        <img class="collectimg" src="../../assets/img/common/collect.svg"></img>
        <span class="collect">{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsItem',
    props: {
      goodsdata: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed: {
      showImg() {
        return (item) => {
          return item.image || item.show.img
        }
      }
    },
    methods: {
      //1.图片加载完成触发
      imageLoad() {
        //将图片加载完成这个事件发送给事件总线
        this.$bus.$emit('itemImgLoad', this.$route.path)
      },

      //2.点击商品触发
      btnClick(index) {
        this.$router.push('/detail/' + this.goodsdata[index].iid)
      }
    }
  }
</script>

<style>
  .goods{
    display: flex;
    /* 让内容不全在一排,超出宽度就自动平铺下一排 */
    flex-wrap: wrap;
    /* 让内容均等分 */
    justify-content: space-around;
    padding: 0.125rem;
    background-color: var(--color-background);
    font-size: 0.875rem;
    text-align: center;
  }
  .goodsitem{
    width: 48%;
  }
  .goodsitem .showimg{
    width: 100%;
    border-radius: 0.3125rem;
    border: 0.1875rem solid #f0f0f0;
  }
  .goodsitem p{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .goodsitem .price{
    color: var(--color-high-text);
    margin-right: 0.625rem;
  }
  .goods .collectimg{
    display: inline-block;
    width: 1.125rem;
    height: 1.125rem;
    margin-top: 0.125rem;
    padding-top: 0.25rem;
  }
</style>
