<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import HomeProducts from '@/components/HomeProducts.vue'
import HomepageInfo from '@/components/HomepageInfo.vue'
import ProductCategories from '@/components/ProductCategories.vue'
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Audiophile - Home'
})
</script>

<template>
  <main>
    <HeroSection />
    <ProductCategories />
    <HomeProducts />
    <HomepageInfo />
  </main>
</template>
