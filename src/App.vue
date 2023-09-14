<template>
  <NavigationBar />
  <RouterView />
  <ModalWindow />
  <FooterSection />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavigationBar from './components/NavigationBar.vue'
import FooterSection from './components/FooterSection.vue'
import { RouterView } from 'vue-router'
import ModalWindow from './components/modal/ModalWindow.vue'
import useModalStore from './stores/useModalStore'

console.log(import.meta.env.BASE_URL)

export default defineComponent({
  name: 'App',
  components: {
    NavigationBar,
    FooterSection,
    RouterView,
    ModalWindow
  },
  data() {
    return {
      isModalOpen: useModalStore().isModalOpen
    }
  },
  watch: {
    $route() {
      window.scrollTo(0, 0)
    }
  }
})
</script>
