import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ScrollAnimation from './scripts/Scrolltrigger'

Vue.config.productionTip = false
Vue.directive('scrollanimation', ScrollAnimation)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
