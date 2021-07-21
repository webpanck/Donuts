<template>
  <div style="paddind-top: 16px;">
    <h2>将触发方式改为 hover</h2>
    <p>
      <strong>预览</strong>
    </p>

    <d-popover trigger="hover">
      <d-button>上方弹出</d-button>
      <template slot="content">
        弹出内容
      </template>
    </d-popover>
    <d-popover position="bottom" trigger="hover">
      <d-button>下方弹出</d-button>
      <template slot="content">
        弹出内容
      </template>
    </d-popover>
    <d-popover position="left" trigger="hover">
      <d-button>左边弹出</d-button>
      <template slot="content">
        弹出内容
      </template>
    </d-popover>
    <d-popover position="right" trigger="hover">
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
          <d-popover trigger="hover">
            <d-button>上方弹出</d-button>
            <template slot="content">
              弹出内容
            </template>
          </d-popover>
          <d-popover position="bottom" trigger="hover">
            <d-button>下方弹出</d-button>
            <template slot="content">
              弹出内容
            </template>
          </d-popover>
          <d-popover position="left" trigger="hover">
            <d-button>左边弹出</d-button>
            <template slot="content">
              弹出内容
            </template>
          </d-popover>
          <d-popover position="right" trigger="hover">
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