<template>
  <!-- 通过class拿组件容易混乱(和其他组件中同名的class混乱)，设置ref属性（ref只会识别当前组件中的这个ref），通过ref去拿更加好 -->
  <div class="wrapper" ref='wrapper'>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    props: {
      probetype: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      //1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probetype,
        pullUpLoad: this.pullUpLoad
      })

      //2.scroll里面的属性scrollTo（回到某个位置）
      this.scroll.scrollTo(0, 0)

      //3.监听滚动的位置
      this.scroll.on('scroll', (position) => {
        //自定义一个scroll事件，用此事件将position位置发送出去
        this.$emit('scrollPosition', position)
      })

      //4.监听上拉事件
      this.scroll.on('pullingUp', () => {
        //将事件发送出去
        this.$emit('pullingUp')
      })
    }
  }
</script>

<style>

</style>
