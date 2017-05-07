// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuez from 'vuez';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Vuez);
const store = new Vuez.Store();

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
