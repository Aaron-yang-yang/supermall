<template>
  <div class="tabcontrol">
    <div v-for="(item, index) in titals"
         class="tabcontrolitem"
         :class="{active: index === currentindex}"
         @click="btnclick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props: {
      titals: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentindex: 0
      }
    },
    // methods: {
    //   btnclick(index) {
    //     this.currentindex = index
    //   }
    // }
    computed: {
      btnclick() {
        return function(index) {
          this.currentindex = index
          this.$emit('tabclick', index)
        }
      }
    }
  }
</script>

<style scoped>
  .tabcontrol{
    display: flex;
    text-align: center;
  }
  .tabcontrolitem{
    flex: 1;
    height: 2.5rem;
    line-height: 2.5rem;
  }
  .tabcontrolitem span{
    padding: 0.1875rem;
  }
  .active span{
    color: var(--color-high-text);
    border-bottom: 0.125rem solid red;
  }
</style>
