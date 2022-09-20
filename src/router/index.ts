import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Category/index.vue'

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
      component: () => import('@/views/food/index.vue'),
    }
  ]
})

export default router
