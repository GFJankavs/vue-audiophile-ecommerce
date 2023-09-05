<template>
  <NavigationBar />
  <RouterView />
  <FooterSection />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavigationBar from './components/NavigationBar.vue'
import FooterSection from './components/FooterSection.vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: {
    NavigationBar,
    FooterSection,
    RouterView
  }
})
</script>
