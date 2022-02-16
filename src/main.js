import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI,axios,VueAxios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
