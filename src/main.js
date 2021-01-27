import Vue from 'vue'
import App from './App.vue'
import router from './router'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

window.UIkit = require('uikit');
window.Icons = require('uikit/dist/js/uikit-icons');
UIkit.use(Icons);