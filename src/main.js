import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

// Layout components
import BaseDefault from './layouts/BaseDefault'
import BaseStickyFooter from './layouts/BaseStickyFooter'

Vue.component('BaseDefault', BaseDefault)
Vue.component('BaseStickyFooter', BaseStickyFooter)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
