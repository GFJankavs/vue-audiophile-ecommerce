<template>
  <div class="container">
    <div class="product__grid">
      <ProductCategory text="headphones" img_filename="image-category-thumbnail-headphones" />
      <ProductCategory text="speakers" img_filename="image-category-thumbnail-speakers" />
      <ProductCategory text="earphones" img_filename="image-category-thumbnail-earphones" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductCategory from './ProductCategory.vue'

export default defineComponent({
  name: 'HomeProducts',
  components: {
    ProductCategory
  }
})
</script>

<style scoped>
.product__grid {
  display: grid;
  gap: 36px;
  padding-top: 32px;
}

@media (min-width: 768px) {
  .product__grid {
    display: flex;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
}

@media (min-width: 1024px) {
  .product__grid {
    gap: 30px;
  }
}
</style>
