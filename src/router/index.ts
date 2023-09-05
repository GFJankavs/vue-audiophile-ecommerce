import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/headphones',
      name: 'headphones',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('/src/views/HeadphonesView.vue')
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: () => import('/src/views/SpeakersView.vue')
    },
    {
      path: '/earphones',
      name: 'earphones',
      component: () => import('/src/views/EarphonesView.vue')
    }
  ]
})

export default router
