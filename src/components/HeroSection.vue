<template>
  <div class="wrapper">
    <div class="container hero__container">
      <div class="hero__img-container">
        <img
          src="@assets/home/mobile/image-header.jpg"
          alt="Hero Background"
          class="hero__img hero__img--mobile"
        />
        <img
          src="@assets/home/desktop/image-hero.jpg"
          alt="Hero Background"
          class="hero__img hero__img--desktop"
        />
      </div>
      <div class="hero__flex">
        <div class="hero__content">
          <div class="hero__content-top">
            <div class="hero__title-container">
              <h3 class="hero__title font__overline">New product</h3>
              <h1 class="hero__subtitle font__h1">XX99 Mark II Headphones</h1>
            </div>
            <p class="hero__text font__body">
              Experience natural, lifelike audio and exceptional build quality made for the
              passionate music enthusiast.
            </p>
          </div>
          <ButtonAction
            text="See Product"
            type="primary"
            path="/headphones/xx99-mark-two-headphones"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonAction from './ButtonAction.vue'

export default defineComponent({
  name: 'HeroSection',
  components: {
    ButtonAction
  }
})
</script>

<style scoped>
.wrapper {
  background-color: #191919;
  z-index: 1;
}

.hero__container {
  position: relative;
}

.hero__img-container {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero__img {
  position: relative;
  height: 100%;
}

.hero__img--desktop {
  display: none;
}

.hero__flex {
  position: relative;
  margin: 0 auto;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 128px 0;
  color: #fff;
  white-space: break-spaces;
  height: 100%;
  width: 100%;
}

.hero__content {
  display: grid;
  justify-items: center;
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
  width: 100%;
  white-space: wrap;
}

.hero__text {
  opacity: 0.75;
}

@media (max-width: 400px) {
  h1 {
    font-size: 48px;
  }
}

@media (min-width: 768px) {
  .hero___img {
    transform: translateY(-100px);
  }

  .hero__content {
    gap: 40px;
  }

  .hero__title-container {
    gap: 24px;
  }
}

@media (min-width: 1024px) {
  .hero__container {
    display: grid;
    place-items: center;
  }

  .hero__img--mobile {
    display: none;
  }

  .hero__img--desktop {
    display: block;
  }

  .hero__flex {
    justify-content: flex-start;
    padding: 128px 0 64px;
  }

  .hero__content {
    justify-items: flex-start;
    text-align: left;
  }

  .hero__content-top {
    max-width: 400px;
  }
}
</style>
