import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home/Home.vue';

Vue.use(Router);

export defaultconst routes = [
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