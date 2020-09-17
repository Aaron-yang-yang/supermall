<template>
  <NavBar>
    <div slot="left" class="tabLeft" @click="tabBackClick">
      <img src="../../../assets/img/common/back.svg">
    </div>
    <div slot="middle" class="tabMiddle">
      <span v-for="(item, index) in title"
      @click="tabMiddleClick(index)"
      :class="{active: currentIndex === index}"
      >{{item}}</span>
    </div>
  </NavBar>
</template>

<script>
  import NavBar from '../../../components/common/navbar/NavBar.vue'

  export default {
    name: 'DetailNavBar',
    components: {
      NavBar
    },
    data() {
      return {
        title: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    methods: {
      //1.点击导航栏返回箭头，返回home主页
      tabBackClick() {
        this.$router.go(-1)
      },

      //2.导航栏中间文字点击函数
      tabMiddleClick(index) {
        this.currentIndex = index
        this.$emit('navBarClick', index)
      }
    }
  }
</script>

<style scoped>
  .tabMiddle{
    display: flex;
  }
  .tabMiddle span{
    flex: 1;
  }
  .tabLeft img{
    margin-top: 0.3125rem;
    width: 2.0625rem;
    height: 2.0625rem;
  }
  .tabMiddle .active{
    color: var(--color-high-text);
    border-bottom: 0.125rem solid red;
  }
</style>
