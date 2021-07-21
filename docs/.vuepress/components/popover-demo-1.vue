<template>
  <div style="paddind-top: 16px;">
    <h2>点击弹出</h2>
    <p>
      <strong>预览</strong>
    </p>

    <d-popover>
      <d-button>上方弹出</d-button>
      <template slot="content">
        弹出内容
      </template>
    </d-popover>
    <d-popover position="bottom">
      <d-button>下方弹出</d-button>
      <template slot="content">
        弹出内容
      </template>
    </d-popover>
    <d-popover position="left">
      <d-button>左边弹出</d-button>
      <template slot="content">
        弹出内容
      </template>
    </d-popover>
    <d-popover position="right">
      <d-button>右边弹出</d-button>
      <template slot="content">
        弹出内容
      </template>
    </d-popover>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
import Button from '../../../src/button'
import Popover from '../../../src/popover'
export default {
  components: {
    'd-button': Button,
    'd-popover': Popover
  },
  data () {
    return {
      content: `
          <d-popover>
            <d-button>上方弹出</d-button>
            <template slot="content">
              弹出内容
            </template>
          </d-popover>
          <d-popover position="bottom">
            <d-button>下方弹出</d-button>
            <template slot="content">
              弹出内容
            </template>
          </d-popover>
          <d-popover position="left">
            <d-button>左边弹出</d-button>
            <template slot="content">
              弹出内容
            </template>
          </d-popover>
          <d-popover position="right">
            <d-button>右边弹出</d-button>
            <template slot="content">
              弹出内容
            </template>
          </d-popover>
      `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>