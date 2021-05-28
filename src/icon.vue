<template>
  <svg class="d-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
  import './svg'
  export default {
    props: ['name']
  }
</script>

<style lang="scss">
  .d-icon {
    width: 1em;
    height: 1em;
  }
</style>