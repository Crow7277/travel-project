import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import fastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';

// 引入swiper样式
import 'swiper/dist/css/swiper.css';
// 使用swiper插件
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
fastClick.attach(document.body);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
