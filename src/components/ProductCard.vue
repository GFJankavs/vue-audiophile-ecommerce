<template>
  <div class="product">
    <img
      :src="product.categoryImage.mobile"
      :alt="product.name"
      class="product__img product__img--mobile"
    />
    <img
      :src="product.categoryImage.tablet"
      :alt="product.name"
      class="product__img product__img--tablet"
    />
    <img
      :src="product.categoryImage.desktop"
      :alt="product.name"
      class="product__img product__img--desktop"
    />
    <div class="product__content">
      <div class="product__text">
        <div class="product__title-container">
          <span v-if="product.new" class="product__new font__overline">new product</span>
          <h4 class="font__h4 product__title">{{ product.name }}</h4>
        </div>
        <p class="font__body product__description">
          {{ product.description }}
        </p>
      </div>
      <ButtonAction text="See Product" variant="primary" />
    </div>
  </div>
</template>

<script lang="ts">
import type { AudiophileData } from '@/types'
import { defineComponent, type PropType } from 'vue'
import ButtonAction from './ButtonAction.vue'

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as PropType<AudiophileData>,
      required: true
    }
  },
  components: {
    ButtonAction
  }
})
</script>

<style>
.product {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

.product__img {
  width: 100%;
  border-radius: 8px;
}

.product__img--tablet,
.product__img--desktop {
  display: none;
}

.product__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.product__text {
  display: grid;
  text-align: center;
  gap: 24px;
}

.product__title-container {
  display: grid;
  justify-content: center;
  gap: 24px;
}

.product__new {
  color: #d87d4a;
  text-transform: uppercase;
}

.product__title {
  width: 210px;
}

.product__description {
  opacity: 0.5;
  width: 100%;
}

@media (min-width: 768px) {
  .product__img--mobile {
    display: none;
  }

  .product__img--tablet {
    display: block;
  }

  .product__text {
    gap: 32px;
  }

  .product__title-container {
    gap: 16px;
  }

  .product__title {
    width: 250px;
  }

  .product__description {
    width: 572px;
  }
}

@media (min-width: 1024px) {
  .product {
    display: flex;
    align-items: center;
    gap: 125px;
  }

  .product:nth-of-type(even) {
    flex-direction: row-reverse;
  }

  .product__content {
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    width: 450px;
    gap: 40px;
  }

  .product__img--tablet {
    display: none;
  }

  .product__img--desktop {
    display: block;
    max-width: 510px;
  }

  .product__text {
    text-align: left;
    gap: 32px;
  }

  .product__title-container {
    width: 100%;
    justify-content: flex-start;
    text-align: left;
  }

  .product__description {
    width: auto;
  }
}
</style>
