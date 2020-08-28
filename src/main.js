import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/handlerRem'
import { Form, Field, Button, Notify } from 'vant'
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(Notify)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
