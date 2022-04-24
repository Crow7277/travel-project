import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home/Home.vue';
import City from '../pages/city/City.vue';
import Detail from '../pages/detail/Detail.vue';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/city',
            name: 'City',
            component: City,
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: Detail,
        },
    ],
    // 解决页面会跟随滚动问题，当切换路由时，页面始终会回到头部
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});

export default router;
