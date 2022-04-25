import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 兼容不支持promis的浏览器
import 'babel-polyfill';
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';
import VueAwesomeSwiper from 'vue-awesome-swiper/src';
import 'swiper/dist/css/swiper.css';

// Vue.use(VueAwesomeSwiper)

createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app');
