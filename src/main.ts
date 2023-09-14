import '@assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import App from './App.vue'
import router from './router'
import type { Router } from 'vue-router'

const toastOptions = {
  onMounted: (_: any, toastApp: { use: (arg0: Router) => void }) => {
    // Register the router
    toastApp.use(router)
  }
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast, toastOptions)

app.mount('#app')
