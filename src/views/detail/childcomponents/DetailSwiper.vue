<template>
    <Swiper v-if='getTopImages.length'>
      <SwiperItem v-for='item in getTopImages' class='itemclass'>
        <img :src="item" alt="轮播图"/>
      </SwiperItem>
    </Swiper>
</template>

<script>
  import {Swiper, SwiperItem} from '../../../components/common/swiper/index.js'

  export default {
    name: 'DetailSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      getTopImages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
</style>
