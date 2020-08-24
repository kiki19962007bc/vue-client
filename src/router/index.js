import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cute from '../views/Cute.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Current from '../views/Current.vue'
import Myfeed from '../views/Myfeed.vue'
import Addfeed from '../views/Addfeed.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/cute',
    name: 'Cute',
    component: Cute
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/current',
    name: 'Current',
    component: Current
  },
  {
    path: '/myfeed',
    name: 'Myfeed',
    component: Myfeed
  },
  {
    path: '/add',
    name: 'add',
    component: Addfeed
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
