<template>
  <div class="shop-info">
    <div v-for="(item, index) in getCartInfo" class="item-info">
      <div class="left">
        <CheckBox @checked='isChecked(index)' :isChecked='itemCheck(index)'/>
      </div>
      <div class="middle">
        <img :src='item.image' alt="商品图片">
      </div>
      <div class="right">
        <h3>{{item.title}}</h3>
        <p>{{item.desc}}</p>
        <span class="price">¥{{item.price}}</span>
        <span class="count">X {{item.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import CheckBox from '../../../components/content/CheckBox.vue'

  export default {
    name: 'ShopInfo',
    components: {
      CheckBox
    },
    computed: {
      ...mapGetters(['getCartInfo'])
    },
    methods: {
      isChecked(index) {
        this.$store.commit('isCheck', index)
      },
      itemCheck(index) {
        return this.$store.state.isBuyProductList[index].checked
      }
    }
  }
</script>

<style scoped>
  .item-info{
    display: flex;
    border-bottom: 2px solid #BBBBBB;
    padding: 0.625rem 0.3125rem;
  }
  .item-info .left{
    flex: 1;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .item-info .middle{
    flex: 3;
  }
  .item-info .middle img{
    width: 6.25rem;
    height: 9.375rem;
    border-radius: 5%;
  }
  .item-info .right{
    position: relative;
    padding: 0 0.3125rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 8;
    overflow: hidden;
  }
  .item-info .right h3,
  .item-info .right p
  {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex: 1;
  }
  .item-info .right .price{
    color: red;
    font-size: 1.25rem;
    flex: 2;
    line-height: 4.375rem;
    margin-left: 0.125rem;
  }
  .item-info .right .count{
    position: absolute;
    right: 1.25rem;
    bottom: 1.25rem;
  }

</style>
