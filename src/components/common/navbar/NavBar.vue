<template>
  <div class='navbar'>
    <div class='left'><slot name="left"></slot></div>
    <div class='middle'><slot name="middle"></slot></div>
    <div class='right'><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
  .navbar{
    height: 2.8125rem;
    display: flex;
    z-index: 100;
  }
  .navbar .left{
    flex: 1;
    text-align: center;
  }
  .navbar .middle{
    flex: 4;
    text-align: center;
    line-height: 2.75rem;
  }
  .navbar .right{
    flex: 1;
    text-align: center;
  }
</style>
