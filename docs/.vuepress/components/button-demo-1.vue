<template>
  <div style="padding-top: 16px">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <d-button>默认按钮</d-button>
    <d-button icon="settings">默认按钮</d-button>
    <d-button :loading="true">默认按钮</d-button>
    <d-button disabled>默认按钮</d-button>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
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
        `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>