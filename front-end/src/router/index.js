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
  },
  {
    path: '/uniformes',
    name: 'Uniformes',
    component: () => import(/* webpackChunkName: "Produtos" */ '../views/Uniformes.vue')
  },
  {
    path: '/toalhas',
    name: 'Toalhas',
    component: () => import(/* webpackChunkName: "Produtos" */ '../views/Toalhas.vue')
  },
  {
    path: '/mascaras',
    name: 'Mascaras',
    component: () => import(/* webpackChunkName: "Produtos" */ '../views/Mascaras.vue')
  },
  {
    path: '/cartoes-de-visitas',
    name: 'CartoesDeVisitas',
    component: () => import(/* webpackChunkName: "Produtos" */ '../views/CartoesDeVisitas.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
