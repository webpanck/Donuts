<template>
  <div>
    <d-button>默认按钮</d-button>
    <d-button icon="settings">默认按钮</d-button>
    <d-button :loading="true">默认按钮</d-button>
    <d-button disabled>默认按钮</d-button>

    <pre>
      <code>
        {{content}}
      </code>
    </pre>
  </div>
</template>

<script>
  import Button from '../../../src/button'
  export default {
    components: {
      'd-button': Button
    },
    data() {
      return {
        content: `
          <d-button>默认按钮</d-button>
          <d-button icon="settings">默认按钮</d-button>
          <d-button :loading="true">默认按钮</d-button>
          <d-button disabled>默认按钮</d-button>
        `
      }
    }
  }
</script>