<template>
  <div style="padding-top: 16px;">
    <h2>设置 gutter</h2>
    <p>
      <strong>预览</strong>
    </p>
    <d-row class="demoRow" gutter="10">
      <d-col span="8">
        <div class="demoCol">8</div>
      </d-col>
      <d-col span="8">
        <div class="demoCol">8</div>
      </d-col>
      <d-col span="8">
        <div class="demoCol">8</div>
      </d-col>
    </d-row>
    <d-row class="demoRow" gutter="10">
      <d-col span="6">
        <div class="demoCol">6</div>
      </d-col>
      <d-col span="6">
        <div class="demoCol">6</div>
      </d-col>
      <d-col span="6">
        <div class="demoCol">6</div>
      </d-col>
      <d-col span="6">
        <div class="demoCol">6</div>
      </d-col>
    </d-row>

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
.demoRow{
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script>
import Row from '../../../src/row'
import Col from '../../../src/col'
export default {
  components: {
    'd-row': Row,
    'd-col': Col
  },
  data () {
    return {
      content: `
          * {
            box-sizing: border-box;
          }
          <d-row class="demoRow" gutter="10">
            <d-col span="8">
              <div class="demoCol">8</div>
            </d-col>
            <d-col span="8">
              <div class="demoCol">8</div>
            </d-col>
            <d-col span="8">
              <div class="demoCol">8</div>
            </d-col>
          </d-row>
          <d-row class="demoRow" gutter="10">
            <d-col span="6">
              <div class="demoCol">6</div>
            </d-col>
            <d-col span="6">
              <div class="demoCol">6</div>
            </d-col>
            <d-col span="6">
              <div class="demoCol">6</div>
            </d-col>
            <d-col span="6">
              <div class="demoCol">6</div>
            </d-col>
          </d-row>
      `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>