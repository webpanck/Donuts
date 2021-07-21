<template>
  <div style="paddind-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <d-tabs :selected="selected">
      <d-tabs-head>
        <d-tabs-item name="1">1</d-tabs-item>
        <d-tabs-item name="2">2</d-tabs-item>
      </d-tabs-head>
      <d-tabs-body>
        <d-tabs-pane name="1">content 1</d-tabs-pane>
        <d-tabs-pane name="2">content 2</d-tabs-pane>
      </d-tabs-body>
    </d-tabs>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Tabs from '../../../src/tabs'
import TabsBody from '../../../src/tabs-body'
import TabsHead from '../../../src/tabs-head'
import TabsItem from '../../../src/tabs-item'
import TabsPane from '../../../src/tabs-pane'
export default {
  components: {
    'd-tabs': Tabs,
    'd-tabs-body': TabsBody,
    'd-tabs-head': TabsHead,
    'd-tabs-item': TabsItem,
    'd-tabs-pane': TabsPane
  },
  data () {
    return {
      selected: '1',
      content: `
          data:{
            selected: '1'
          }
          <d-tabs :selected="selected">
            <d-tabs-head>
              <d-tabs-item name="1">1</d-tabs-item>
              <d-tabs-item name="2">2</d-tabs-item>
            </d-tabs-head>
            <d-tabs-body>
              <d-tabs-pane name="1">content 1</d-tabs-pane>
              <d-tabs-pane name="2">content 2</d-tabs-pane>
            </d-tabs-body>
          </d-tabs>
      `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>