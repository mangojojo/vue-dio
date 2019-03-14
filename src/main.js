import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Dialog } from 'vant'

import 'normalize.css'

Vue.use(Dialog)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
