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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('/src/views/CategoryView.vue')
    },
    {
      path: '/:category/:product',
      name: 'product',
      component: () => import('/src/views/ProductView.vue')
    }
    // {
    //   path: '/speakers',
    //   name: 'speakers',
    //   component: () => import('/src/views/SpeakersView.vue')
    // },
    // {
    //   path: '/earphones',
    //   name: 'earphones',
    //   component: () => import('/src/views/EarphonesView.vue')
    // }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useModalStore()

  console.log(from)

  const modal = document.querySelector('.modal-wrapper')

  if (modal) {
    store.closeModal()
  }

  next()
})

export default router
