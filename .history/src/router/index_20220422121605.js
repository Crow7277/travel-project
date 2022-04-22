import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home/Home.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
];

const router = new Router({
    routes,
});

export default router;


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(needle.length === 0) return 0;
    let h = haystack.split('');
    let n = needle.split('');
    let next = [];
    getNext(next, needle);
    let j = 0;
    for(let i = 0; i < h.length; i++){
        while(j > 0 && h[i] !== n[j]){
            j = next[j - 1];
        }
        if(h[i] === n[j]){
            j++;
        }
        if(j === n.length){
            return i - n.length + 1;
        }
    }
    return -1;
};
// 构建next数组
const getNext = (next, str) => {
    let j = 0;
    next[0] = j;
    let s = str.split('');
    for(let i = 1; i < s.length; i++){
        while(j > 0 && s[i] !== s[j]){
            j = next[j - 1];
        }
        if(s[i] === s[j]){
            j++;
        }
        next[i] = j;
    }
}