<template>
  <div class="wrapper">
    <div class="container">
      <div class="hero__flex">
        <div class="hero__content">
          <div class="hero__content-top">
            <div class="hero__title-container">
              <h1 class="hero__title font__overline">New product</h1>
              <p class="hero__subtitle font__h1">XX99 Mark II Headphones</p>
            </div>
            <p class="hero__text font__body">
              Experience natural, lifelike audio and exceptional build quality made for the
              passionate music enthusiast.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeroSection'
})
</script>

<style scoped>
.wrapper {
  background-color: #191919;
  background-image: url('');
  color: #fff;
}

.hero__flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero__content {
  display: grid;
  justify-content: center;
  gap: 28px;
  text-align: center;
}

.hero__content-top {
  display: grid;
  gap: 24px;
}

.hero__title-container {
  display: grid;
  gap: 16px;
}

.hero__title {
  opacity: 0.4964;
}

.hero__text {
  opacity: 0.75;
}
</style>
