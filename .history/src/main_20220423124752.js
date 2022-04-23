import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import fastClick from 'fastclick';
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
    // 重复次数
    let count = 0;
    let str = '';
    for (; str.length < b.length; count++) {
        str += a;
    }
    str += a;
    let index = KMP(str, b);
    if (index === -1) return -1;
    // 当b.length + index > a.length * count时说明不是从头开始匹配的，说明额外进行了一次添加
    return b.length + index > a.length * count ? count + 1 : count;
};

// kmp
const KMP = (a, b) => {
    // 匹配b是否为a的子串
    let sa = a.split('');
    let sb = b.split('');
    let next = [];
    getNext(next, b);
    let j = -1;
    for (let i = 0; i < a.length; i++) {
        while (j >= 0 && sa[i] !== sb[j + 1]) {
            j = next[j];
        }
        if (sa[i] === sb[j + 1]) {
            j++;
        }
        // 此时说明b为a的子串，因为匹配了j，返回当前下标
        if (j === b.length - 1) return i - j;
    }
    return -1;
};
// next
const getNext = (next, str) => {
    let s = str.split('');
    let j = -1;
    next[0] = j;
    for (let i = 1; i < s.length; i++) {
        while (j >= 0 && s[i] !== s[j + 1]) {
            j = next[j];
        }
        if (s[i] === s[j + 1]) {
            j++;
        }
        next[i] = j;
    }
};
