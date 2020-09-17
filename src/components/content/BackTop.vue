<template>
  <div class="backtop">
    <img src="../../assets/img/common/top.png" alt="回到顶部">
  </div>
</template>

<script>
  export default {
    name: 'BackTop'
  }
</script>

<style scoped>
  .backtop{
    position: fixed;
    right: 0.5rem;
    bottom: 4rem;

    z-index: 1;
  }
  .backtop img{
    width: 2.6875rem;
    height: 2.6875rem;
  }
</style>
