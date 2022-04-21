import Vue from 'vue';
import Router from 'vue-router';
import home from '../pages/home/Home.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
