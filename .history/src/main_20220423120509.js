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
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    if (s.length === 0) return false;
    // 利用KMP算法进行匹配
    // 当next.length - 1索引所在，也就是next数组最后一位不为-1的时候，说明当前字符串有最大的相同前后缀
    // 如果这个相同前后缀的长度为字符串的整数倍的话说明这个数组是循环的
    // 由于会出现多次循环，所以用数组长度减去当前最长前后缀的长度，剩下的部分就是一个周期的长度，如果可以被数组整除说明是重复的
    let next = [];
    getNext(next, s);
    // 此时由于使用的是next - 1的形式求得next数组，所以计算时要加一
    let len = s.length;
    if (next[len - 1] !== -1 && len % (len - (next[len - 1] + 1)) === 0) return true;
    return false;
};
const getNext = (next, str) => {
    let s = str.split('');
    let j = -1;
    next[0] = j;
    for (let i = 1; i < str.length; i++) {
        while (j >= 0 && s[i] !== s[j + 1]) {
            j = next[j];
        }
        if (s[i] === s[j + 1]) {
            j++;
        }
        next[i] = j;
    }
};
