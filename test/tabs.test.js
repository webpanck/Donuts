const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsItem from '../src/tabs-item'
import TabsBody from '../src/tabs-body'
import TabsPane from '../src/tabs-pane'

Vue.component('d-tabs', Tabs)
Vue.component('d-tabs-head', TabsHead)
Vue.component('d-tabs-item', TabsItem)
Vue.component('d-tabs-body', TabsBody)
Vue.component('d-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
    })
    it('接受 selected prop', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <d-tabs selected="finance">
                <d-tabs-head>
                    <d-tabs-item name="beauty">美女</d-tabs-item>
                    <d-tabs-item name="finance">财经</d-tabs-item>
                    <d-tabs-item name="sports">体育</d-tabs-item>
                </d-tabs-head>
                <d-tabs-body>
                    <d-tabs-pane name="beauty">美女相关资讯</d-tabs-pane>
                    <d-tabs-pane name="finance">财经相关资讯</d-tabs-pane>
                    <d-tabs-pane name="sports">体育相关资讯</d-tabs-pane>
                </d-tabs-body>
            </d-tabs>
        `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
            expect(x.classList.contains('active')).to.be.true
            done()
        })
    })
    it('接受 direction prop', () => {

    })
})