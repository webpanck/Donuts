import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin';
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'

Vue.component('d-button', Button)
Vue.component('d-icon', Icon)
Vue.component('d-button-group', ButtonGroup)
Vue.component('d-input', Input)
Vue.component('d-row', Row)
Vue.component('d-col', Col)
Vue.component('d-layout', Layout)
Vue.component('d-header', Header)
Vue.component('d-sider', Sider)
Vue.component('d-content', Content)
Vue.component('d-footer', Footer)
Vue.component('d-toast', Toast)
Vue.use(plugin)
Vue.component('d-tabs', Tabs)
Vue.component('d-tabs-head', TabsHead)
Vue.component('d-tabs-item', TabsItem)
Vue.component('d-tabs-body', TabsBody)
Vue.component('d-tabs-pane', TabsPane)

new Vue({
    el: '#app',
    data: {
        selectedTab: 'sports'
    },
    created() {
    },
    methods: {
        showToast() {
            this.$toast('你的钱包需要充值！', {
                enableHtml: true,
                position: 'bottom',
                closeButton: {
                    text: '已充值',
                    callback() {
                        console.log('他说已经充值智商了');
                    }
                },
            })
        }
    }
})


