import Vue from 'vue'
import VueRouter from 'vue-router'

// views
import Me from '../views/Me'
import Projects from '../views/Projects'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Me
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
