<template>
  <NavigationBar />
  <HeroSection />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavigationBar from './components/NavigationBar.vue'
import HeroSection from './components/HeroSection.vue'
HeroSection

export default defineComponent({
  name: 'App',
  components: {
    NavigationBar,
    HeroSection
  }
})
</script>
