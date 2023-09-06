<template>
  <main>
    <div class="title__container">
      <div class="container">
        <h2 class="font__h2 title">{{ title.toUpperCase() }}</h2>
      </div>
    </div>
    <section>
      <div class="container">
        <div class="category__grid">
          <div class="product__grid">
            <ProductCard v-for="product of products" :key="product.name" :product="product" />
          </div>
          <ProductCategories />
          <HomepageInfo />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import type { AudiophileData } from '@/types'
import { defineComponent } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductCategories from '@/components/ProductCategories.vue'
import HomepageInfo from '@/components/HomepageInfo.vue'

export default defineComponent({
  name: 'CategoryView',
  data() {
    return {
      title: '',
      products: [] as Array<AudiophileData>
    }
  },
  components: {
    ProductCard,
    ProductCategories,
    HomepageInfo
  },
  methods: {
    async prepareProductData(category: string | string[]) {
      if (Array.isArray(category)) return
      const response = await fetch('/src/data/data.json').then((res) => res.json())
      const filteredData = response.filter((item: AudiophileData) => item.category === category)
      this.title = category
      this.products = filteredData
      console.log(filteredData)
    }
  },
  watch: {
    $route(to) {
      this.prepareProductData(to.params.category)
    }
  },
  async mounted() {
    await this.prepareProductData(this.$route.params.category)
  }
  // async beforeRouteUpdate(to) {
  //   await this.prepareProductData(to.params.category);
  // }
})
</script>

<style scoped>
.title__container {
  background-color: #000;
  color: #fff;
  padding: 32px 0;
}

.title {
  text-align: center;
}

.category__grid {
  display: grid;
  gap: 120px;
}

.product__grid {
  padding-top: 64px;
  display: grid;
  gap: 120px;
}

@media (min-width: 768px) {
  .title__container {
    padding: 96px 0;
  }
}
</style>
