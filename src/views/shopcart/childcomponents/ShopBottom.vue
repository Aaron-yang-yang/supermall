<template>
  <div class="shop-bottom">
    <div class="class1">
      <img class="check-all"
           src="../../../assets/img/cart/tick.svg"
           alt="图片"
           :class="{isChecked: isCheckedAll}"
           @click="checkClick">
    </div>
    <span class="span1">全选</span>
    <span class="span2">总计：¥{{getTotlePrice}}</span>
    <span class="span3">去结算({{getCheckCount}})</span>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'ShopBottom',
    computed: {
      ...mapGetters(['getTotlePrice', 'getCartCount', 'isCheckedAll', 'getCheckCount']),
    },
    methods: {
      checkClick() {
        this.$store.commit('allCheckOr')
      }
    }
  }
</script>

<style scoped>
  .shop-bottom{
    background-color: #A8AAAA;
    height: 2.5rem;
    display: flex;
  }
  .shop-bottom .class1{
    display: inline-block;
    flex: 1;
    display: flex;
    justify-content:center;
    align-items:center;
  }
  .shop-bottom img{
    border: 0.125rem solid #BBBBBB;
    border-radius: 50%;
    height: 1.375rem;
    width: 1.375rem;
  }
  .isChecked{
    background-color: red;
    border-color: red;
  }
  .shop-bottom .span1{
    flex: 1;
    display: flex;
    justify-content:center;
    align-items:center;
  }
  .shop-bottom .span2{
    flex: 6;
    display: flex;
    justify-content:center;
    align-items:center;
  }
  .shop-bottom .span3{
    flex: 3;
    background-color: red;
    color: white;
    display: flex;
    justify-content:center;
    align-items:center;
  }
</style>
