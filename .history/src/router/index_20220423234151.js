import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home/Home.vue';
import City from '../pages/city/City.vue';

Vue.use(Router);

const routes = [
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
];

const router = new Router({
    routes,
});

export default router;
