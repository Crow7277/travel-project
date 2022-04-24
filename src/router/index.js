import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/pages/home/Home.vue'),
        },
        {
            path: '/city',
            name: 'City',
            component: () => import('@/pages/city/City.vue'),
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: () => import('@/pages/detail/Detail.vue'),
        },
    ],
    // 解决页面会跟随滚动问题，当切换路由时，页面始终会回到头部
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});

export default router;
