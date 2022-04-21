import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home/Home.vue';

Vue.use(Router);
//创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
    ],
});

export default router;
