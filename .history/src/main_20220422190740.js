import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import fastClick from 'fastclick';
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';

Vue.config.productionTip = false;
fastClick.attach(document.body);

import VueAwesomeSwiper from 'vue-awesome-swiper';

// require styles
import 'swiper/dist/css/swiper.css';

Vue.use(VueAwesomeSwiper /* { default global options } */);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
