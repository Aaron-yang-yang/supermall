<template>
  <div class="home_recommend">
    <div v-for="item in recommends" class='recommend_item'>
      <a :href="item.link">
        <img :src="item.image">
        <P>{{item.title}}</P>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .home_recommend{
    display: flex;
    font-size: 0.75rem;
    text-align: center;
    padding-top: 0.625rem;
    padding-bottom: 1.25rem;
    border-bottom: 10px solid #dfdfdf;
  }
  .recommend_item{
    flex: 1;
  }
  .recommend_item img{
    width: 80%;
    height: 80%;
  }
</style>
