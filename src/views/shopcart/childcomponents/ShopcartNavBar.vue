<template>
  <div class="shopcart-nav-bar">
    <NavBar class='middle'>
      <div slot='middle'>购物车({{getCartCount}})</div>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from '../../../components/common/navbar/NavBar.vue'

  import { mapGetters } from 'vuex'

  export default {
    name: 'ShopcartNavBar',
    components: {
      NavBar
    },
    computed: {
      //1.vuex提供的一种特殊方法从store中的getters中直接拿到结果使用
      ...mapGetters(['getCartCount'])
    }
  }
</script>

<style scoped>
  .middle{
    background-color: red;
    color: white;
  }
</style>
