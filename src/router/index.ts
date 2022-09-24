import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Statistics/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/401',
      name: 'unauthentication',
      component: () => import('@/views/errorViews/unAuthentication.vue'),
    },
    {
      path: '/404',
      name: 'page_not_found',
      component: () => import('@/views/errorViews/pageNotFound.vue'),
    },
    {
      path: '/500',
      name: 'server_error',
      component: () => import('@/views/errorViews/serverError.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/foods',
      name: 'foods',
      component: () => import('@/views/Foods/index.vue'),
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('@/views/Category/index.vue'),
    },
    {
      path: '/couriers',
      name: 'couriers',
      component: () => import('@/views/Couriers/index.vue'),
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('@/views/Orders/index.vue'),
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/Users/index.vue'),
    },
    {
      path: '/staffs',
      name: 'staffs',
      component: () => import('@/views/Staffs/index.vue'),
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('@/views/Address/index.vue'),
    },
    {
      path: '/socials',
      name: 'socials',
      component: () => import('@/views/Socials/index.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About/index.vue'),
    }
  ]
})

export default router
