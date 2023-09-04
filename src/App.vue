<template>
  <NavigationBar />
  <HeroSection />
  <ProductCategories />
  <HomeProducts />
  <HomeInfo />
  <FooterSection />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavigationBar from './components/NavigationBar.vue'
import HeroSection from './components/HeroSection.vue'
import ProductCategories from './components/ProductCategories.vue'
import HomeProducts from './components/HomeProducts.vue'
import HomeInfo from './components/HomeInfo.vue'
import FooterSection from './components/FooterSection.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavigationBar,
    HeroSection,
    ProductCategories,
    HomeProducts,
    HomeInfo,
    FooterSection
  }
})
</script>
