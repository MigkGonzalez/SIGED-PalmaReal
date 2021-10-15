import Vue from 'vue'
import VueRouter from 'vue-router'
import ErrorPage from '../views/ErrorPage.vue'
import HomeComp from  '../components/HomeComp.vue'
import Crud from '../components/Crud.vue'
import ActualizarDepor from '../components/ActualizarDepor.vue'
//import Notas from '../views/Notas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComp, 
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {path: '/notas',
  name: 'Notas',
  component: ()=> import('../views/Notas.vue')
  },

  {
  path: '*',
  name: 'Error 404',
  component: ErrorPage
  },

  {
    path: '/Entrenador',
    name: 'Entrenador',
    component: Crud
  },

  {
    path: '/Actualizar',
    name: 'Actualizar',
    component: ActualizarDepor
  }
  

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
