<template>
  <div class="container">
    <div class="info__content">
      <img
        src="@assets/shared/mobile/image-best-gear.jpg"
        alt="Best Gear"
        class="info__img info__img--mobile"
      />
      <img
        src="@assets/shared/tablet/image-best-gear.jpg"
        alt="Best Gear"
        class="info__img info__img--tablet"
      />
      <div class="info__text">
        <h4 class="font__h4 info__title">Bringing you the <strong>best</strong> audio gear</h4>
        <p class="font__body info__paragraph">
          Located at the heart of New York City, Audiophile is the premier store for high end
          headphones, earphones, speakers, and audio accessories. We have a large showroom and
          luxury demonstration rooms available for you to browse and experience a wide range of our
          products. Stop by our store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeInfo'
})
</script>

<style scoped>
.info__img {
  width: 100%;
  border-radius: 8px;
}

.info__content {
  display: grid;
  gap: 40px;
  padding-bottom: 120px;
}

.info__text {
  display: grid;
  gap: 32px;
  text-align: center;
}

.info__title strong {
  color: #d87d4a;
}

.info__paragraph {
  opacity: 0.5;
}

.info__img--tablet {
  display: none;
}

@media (min-width: 768px) {
  .info__img--mobile {
    display: none;
  }

  .info__img--tablet {
    display: block;
  }
}
</style>
