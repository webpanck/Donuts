const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.exist
    })
    it('可以设置position.', (done) => {
        Vue.component('d-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <d-popover position="bottom" ref="a">
                <template slot="content">
                    popover内容
                </template>
                <button>点我</button>
            </d-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
            const {contentWrapper} = vm.$refs.a.$refs
            expect(contentWrapper.classList.contains('position-bottom')).to.be.true
            done()
        })
    })
    // it('可以设置position.', () => {
    //     const Constructor = Vue.extend(Popover)
    //     const vm = new Constructor({
    //         propsData: {
    //             position: 'bottom'
    //         }
    //     }).$mount()
    //     const useElement = vm.$el.querySelector('use')
    //     expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
    //     vm.$destroy()
    // })

})