import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import useModalStore from '@/stores/useModalStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:category',
      name: 'category',
      component: () => import('/src/views/CategoryView.vue')
    },
    {
      path: '/:category/:product',
      name: 'product',
      component: () => import('/src/views/ProductView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('/src/views/CheckoutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useModalStore()

  const modal = document.querySelector('.modal-wrapper')

  if (modal) {
    store.closeModal()
  }

  next()
})

export default router
