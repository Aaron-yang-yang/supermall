<template>
  <div class="check-box">
    <img src="../../assets/img/cart/tick.svg"
         alt="图片"
         :class="{isChecked: isChecked}"
         @click="checkClick">
  </div>
</template>

<script>
  export default {
    name: 'CheckBox',
    props: {
      isChecked: {
        type: Boolean,
        default() {
          return true
        }
      }
    },

    methods: {
      checkClick() {
        // this.isChecked = !this.isChecked
        this.$emit('checked')
      }
    }
  }
</script>

<style scoped>
  .check-box img{
    border: 0.125rem solid #BBBBBB;
    border-radius: 50%;
  }
  .check-box .isChecked{
    background-color: red;
    border-color: red;
  }
</style>
