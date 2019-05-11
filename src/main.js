import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

import http from './http'

Vue.use(iView)
Vue.prototype.$Loading.config({
    color: '#1890ff',
    failedColor: '#f5222d',
    height: 4,
    duration: 1000,
})
Vue.config.productionTip = false

Vue.prototype.$get = http.get;
Vue.prototype.$post = http.post;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
