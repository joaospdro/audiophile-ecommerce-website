import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/headphones',
    name: 'Headphones',
    component: () => import('../views/Headphones.vue'),
    meta: { categoriesVisible: true }
  },
  {
    path: '/speakers',
    name: 'Speakers',
    component: () => import('../views/Speakers.vue'),
    meta: { categoriesVisible: true }
  },
  {
    path: '/earphones',
    name: 'Earphones',
    component: () => import('../views/Earphones.vue'),
    meta: { categoriesVisible: true }
  },
  {
    path: '/product/:slug',
    name: 'Product',
    component: () => import('../views/Product.vue'),
    meta: { categoriesVisible: true, alternativeHeader: true }
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/Checkout.vue'),
    meta: { alternativeHeader: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
