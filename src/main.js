import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'



Vue.config.productionTip = false
Vue.use(Antd)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
