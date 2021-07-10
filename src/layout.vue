<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'DonutsLayout',
    data() {
      return {
        layoutClass: {
          hasSider: false
        }
      }
    },
    mounted() {
      this.$children.forEach((vm) => {
        if(vm.$options.name === 'DonutsSider') {
          this.layoutClass.hasSider = true
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .layout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    &.hasSider {
      flex-direction: row;
      flex-grow: 1;
    }
  }
</style>