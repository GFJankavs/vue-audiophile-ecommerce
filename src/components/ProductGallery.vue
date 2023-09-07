<template>
  <div class="gallery">
    <div class="gallery__img--1">
      <img
        :src="`/src/assets/product-${productSlug}/mobile/image-gallery-1.jpg`"
        alt="Gallery Image 1"
        class="gallery__img gallery__img--mobile"
      />
      <img
        :src="`/src/assets/product-${productSlug}/tablet/image-gallery-1.jpg`"
        alt="Gallery Image 1"
        class="gallery__img gallery__img--tablet"
      />
      <img
        :src="`/src/assets/product-${productSlug}/desktop/image-gallery-1.jpg`"
        alt="Gallery Image 1"
        class="gallery__img gallery__img--desktop"
      />
    </div>
    <div class="gallery__img--2">
      <img
        :src="`/src/assets/product-${productSlug}/mobile/image-gallery-2.jpg`"
        alt="Gallery Image 1"
        class="gallery__img gallery__img--mobile"
      />
      <img
        :src="`/src/assets/product-${productSlug}/tablet/image-gallery-2.jpg`"
        alt="Gallery Image 1"
        class="gallery__img gallery__img--tablet"
      />
      <img
        :src="`/src/assets/product-${productSlug}/desktop/image-gallery-2.jpg`"
        alt="Gallery Image 1"
        class="gallery__img gallery__img--desktop"
      />
    </div>
    <div class="gallery__img--3">
      <img
        :src="`/src/assets/product-${productSlug}/mobile/image-gallery-3.jpg`"
        alt="Gallery Image 1"
        class="gallery__img gallery__img--mobile"
      />
      <img
        :src="`/src/assets/product-${productSlug}/tablet/image-gallery-3.jpg`"
        alt="Gallery Image 1"
        class="gallery__img gallery__img--tablet"
      />
      <img
        :src="`/src/assets/product-${productSlug}/desktop/image-gallery-3.jpg`"
        alt="Gallery Image 1"
        class="gallery__img gallery__img--desktop"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    productSlug: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
.gallery {
  display: grid;
  gap: 20px;
  width: 100%;
}

.gallery div {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
}

.gallery__img {
  width: 100%;
}

.gallery__img--tablet,
.gallery__img--desktop {
  display: none;
}

@media (min-width: 768px) {
  .gallery {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px 18px;
    max-height: 368px;
    grid-template-areas:
      'img1 img1 img3 img3 img3'
      'img2 img2 img3 img3 img3';
  }

  .gallery__img {
    width: 100%;
    height: auto;
  }

  .gallery__img--1 {
    grid-area: img1;
  }

  .gallery__img--2 {
    grid-area: img2;
  }

  .gallery__img--3 {
    grid-area: img3;
  }

  .gallery__img--mobile {
    display: none;
  }

  .gallery__img--tablet {
    display: block;
  }
}

@media (min-width: 1024px) {
  .gallery__img--tablet {
    display: none;
  }

  .gallery__img--desktop {
    display: block;
  }
}
</style>
