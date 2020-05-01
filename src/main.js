import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Cloudinary from 'cloudinary-vue';

import './assets/styles.css';

Vue.config.productionTip = false;

Vue.use(Cloudinary, {
  configuration: {
    cloudName: 'tamas-demo'
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
