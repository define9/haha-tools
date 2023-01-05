import Vue from 'vue'
import App from './App.vue'

import vueMiniPlayer from 'vue-mini-player'
import ElementUI from 'element-ui'

import 'vue-mini-player/lib/vue-mini-player.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(vueMiniPlayer)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
