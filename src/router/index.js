import Vue from 'vue'
import VueRouter from 'vue-router'
import Work from '../views/Work.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Work',
    component: Work
  },
  {
    path: '/about&contact',
    name: 'About-Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About-Contact.vue')
  },
  {
    path: '/edicion19',
    name: 'Edicion19',
    component: () => import(/*webpackChunkName: "edicion19" */ '../views/Edicion.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
