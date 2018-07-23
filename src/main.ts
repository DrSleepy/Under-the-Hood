import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';

// libraries
import VueHighlightJS from 'vue-highlightjs';

// components
Vue.use(VueHighlightJS);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
