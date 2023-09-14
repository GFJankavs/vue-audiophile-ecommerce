<template>
  <main>
    <div class="title__container">
      <div class="container">
        <h2 class="font__h2 title">{{ title.toUpperCase() }}</h2>
      </div>
    </div>
    <div class="category__grid">
      <section>
        <div class="container">
          <div class="product__grid">
            <ProductCard
              v-for="product of products"
              :key="product.name"
              :product="product"
              :category="$route.params.category.toString()"
            />
          </div>
        </div>
      </section>
      <section>
        <ProductCategories />
      </section>
      <section>
        <HomepageInfo />
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import type { AudiophileData } from '@/types'
import { defineComponent } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductCategories from '@/components/ProductCategories.vue'
import HomepageInfo from '@/components/HomepageInfo.vue'
import { fetchData } from '@/helpers'

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
      const response = await fetchData()
      const filteredData = response.filter((item: AudiophileData) => item.category === category)
      this.title = category
      this.products = filteredData
    }
  },
  watch: {
    $route(to) {
      this.prepareProductData(to.params.category)
      document.title = `Audiophile - ${this.title[0].toUpperCase() + this.title.slice(1)}`
    }
  },
  async mounted() {
    await this.prepareProductData(this.$route.params.category)
    document.title = `Audiophile - ${this.title[0].toUpperCase() + this.title.slice(1)}`
  }
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
