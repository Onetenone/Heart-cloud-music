import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import Fastclick from 'fastclick';
import '@/assets/css/index.styl';

Fastclick.attach(document.body);
Vue.use(Router);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
