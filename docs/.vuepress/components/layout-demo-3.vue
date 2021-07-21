<template>
  <div style="paddind-top: 16px;">
    <h2>布局</h2>
    <p>
      <strong>预览</strong>
    </p>

    <d-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <d-sider style=" background:#ddd; width:200px; color: black;">
        sider
      </d-sider>
      <d-layout>
        <d-header style="height: 50px; background:lightskyblue;">
          header
        </d-header>
        <d-content style="height: 100px; background:deepskyblue;">
          content
        </d-content>
        <d-footer style="height: 50px; background:lightskyblue;">
          footer
        </d-footer>
      </d-layout>
    </d-layout>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import Layout from '../../../src/layout'
import Header from '../../../src/header'
import Footer from '../../../src/footer'
import Content from '../../../src/content'
import Sider from '../../../src/sider'
export default {
  components: {
    'd-layout': Layout,
    'd-header': Header,
    'd-footer': Footer,
    'd-content': Content,
    'd-sider': Sider
  },
  data () {
    return {
      content: `
          <d-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <d-sider style=" background:#ddd; width:200px; color: black;">
              sider
            </d-sider>
            <d-layout>
              <d-header style="height: 50px; background:lightskyblue;">
                header
              </d-header>
              <d-content style="height: 100px; background:deepskyblue;">
                content
              </d-content>
              <d-footer style="height: 50px; background:lightskyblue;">
                footer
              </d-footer>
            </d-layout>
          </d-layout>
      `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>
