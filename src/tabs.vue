<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'DonutsTabs',
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    methods: {
      checkChildren() {
        if(this.$children.length === 0) {
          console && console.warn &&
          console.warn('tabs 的子组件只能是 tabs-head 和 tabs-bod，但你没有写子组件')
        }
      },
      selectTab() {
        this.$children.forEach((vm) => {
          if(vm.$options.name === 'DonutsTabsHead') {
            vm.$children.forEach((childVm) => {
              if(childVm.$options.name === 'DonutsTabsItem'
                  && childVm.name === this.selected) {
                this.eventBus.$emit('update:selected', this.selected, childVm)
              }
            })
          }
        })
      }
    },
    mounted() {
      this.checkChildren()
      this.selectTab()
    }
  }
</script>

<style lang="scss" scoped>
  .tabs {

  }
</style>