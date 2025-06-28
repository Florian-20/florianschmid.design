import Vue from 'vue'
import VueRouter from 'vue-router'
import Work from '../views/Work.vue'
import Meta from 'vue-meta'


Vue.use(Meta)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Work',
    component: Work
  },
  {
    path: '/Idun-Chair',
    name: 'Idun Chair',
    component: () => import(/* webpackChunkName: "Idun Chair" */ '../views/IdunChair.vue')
  },
  {
    path: '/DAC',
    name: 'DAC',
    component: () => import(/* webpackChunkName: "DAC" */ '../views/DAC.vue')
  },
  {
    path: '/about&contact',
    name: 'About-Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/About-Contact.vue')
  },
  { 
    path: '/panier-bio',
    name: 'Panier-Bio',
    component: () => import(/*webpackChunkName: "Panier-Bio" */ '../views/Panier-Bio.vue')
  },
  {
    path: '/edicion19',
    name: 'Edicion19',
    component: () => import(/*webpackChunkName: "edicion19" */ '../views/Edicion.vue')
  },
  {
    path: '/migros',
    name: 'Migros',
    component: () => import(/*webpackChunkName: "migros" */ '../views/Migros.vue')
  },
  {
    path: '/bildsprache',
    name: 'Bildsprache',
    component: () => import(/*webpackChunkName: "bildsprache" */ '../views/Bildsprache.vue')
  },
  {
    path: '/citruspackus',
    name: 'citruspackus',
    component: () => import(/*webpackChunkName: "citruspackus" */ '../views/citrus.vue')
  },
  {
    path: '/3d&typo',
    name: '3d&typo',
    component: () => import(/*webpackChunkName: "3d&typo" */ '../views/3dTypo.vue')
  },
  {
    path: '/Drop-By-Drop',
    name: 'DropByDrop',
    component: () => import(/*webpackChunkName: "echo-chamber" */ '../views/DropByDrop.vue')
  },
  {
    path: '/speaker-Stands',
    name: 'Speaker-Stands',
    component: () => import(/*webpackChunkName: "speaker-stands" */ '../views/Speakerstand.vue')
  },
  {
    path: '/ranger',
    name: 'ranger',
    component: () => import(/*webpackChunkName: "mat-scanner" */ '../views/Ranger.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
