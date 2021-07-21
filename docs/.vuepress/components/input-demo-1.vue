<template>
  <div style="paddind-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <d-input value="中文"></d-input>
    <d-input value="中文" disabled></d-input>
    <d-input value="中文" readonly></d-input>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Input from '../../../src/input'
export default {
  components: {
    'd-input': Input
  },
  data () {
    return {
      selected: '1',
      content: `
          <d-input></d-input>
          <d-input value="中文"></d-input>
          <d-input value="中文" disabled></d-input>
          <d-input value="中文" readonly></d-input>
      `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>