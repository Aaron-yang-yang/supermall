<template>
  <Swiper>
    <SwiperItem v-for='item in banners'>
      <a :href="item.link">
        <img :src="item.image" alt="轮播图" @load="bannarImgLoad">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {Swiper, SwiperItem} from '../../../components/common/swiper/index.js'

  export default {
    name: 'HomeSwiper',
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        flag: true
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      //1.监听到轮播图图片加载完就发送事件出去
      bannarImgLoad() {
        if(this.flag){
          this.$emit('bannarImageLoad')
          this.flag = !this.flag
        }
      }
    }
  }
</script>

<style>
</style>
