import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
]

const router = new VueRouter({
  routes
})

export default router
