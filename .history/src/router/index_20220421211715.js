import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home/Home.vue';

Vue.use(Router);

export default new Router({
    routers: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
    ],
});
//创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于' },
        },
    ],
});

export default router;