import '@assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast, { type PluginOptions } from 'vue-toastification'

import App from './App.vue'
import router from './router'

const toastOptions: PluginOptions = {
  timeout: 3000,
  transition: 'Vue-Toastification__bounce',
  closeButton: false
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast, toastOptions)

app.mount('#app')
