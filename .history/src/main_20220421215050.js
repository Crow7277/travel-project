import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import fastClick from 'fastclick';
import './assets/style/reset.css';
import './assets/style/border.css';
import ''

Vue.config.productionTip = false;
fastClick.attach(document.body);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
