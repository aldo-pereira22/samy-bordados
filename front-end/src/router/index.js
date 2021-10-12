import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/produtos',
    name: 'Produtos',

    component: () => import(/* webpackChunkName: "Produtos" */ '../views/Produtos.vue')
  },
  {
    path: '/avental',
    name: 'Avental',
    component: () => import(/* webpackChunkName: "Produtos" */ '../views/Avental.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
