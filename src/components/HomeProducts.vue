<template>
  <div class="container">
    <div class="product__grid">
      <section class="product__first">
        <div class="first__content">
          <img
            src="@assets/home/mobile/image-speaker-zx9.png"
            alt=""
            class="first__img first__img--mobile"
          />
          <img
            src="@assets/home/desktop/image-speaker-zx9.png"
            alt=""
            class="first__img first__img--desktop"
          />
          <div class="first__text-content">
            <h3 class="first__title">ZX9 SPEAKER</h3>
            <p class="font__body first__text">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
              sound.
            </p>
            <ButtonAction text="See Product" variant="secondary" path="/speakers/zx9-speaker" />
          </div>
        </div>
      </section>
      <section class="product__second">
        <h4 class="font__h4">ZX7 SPEAKER</h4>
        <ButtonAction text="See Product" variant="secondary" path="/speakers/zx7-speaker" />
      </section>
      <section class="product__third">
        <div class="third__img-container">
          <img
            src="@assets/home/mobile/image-earphones-yx1.jpg"
            alt="Earphones"
            class="third__img third__img--mobile"
          />
          <img
            src="@assets/home/tablet/image-earphones-yx1.jpg"
            alt="Earphones"
            class="third__img third__img--tablet"
          />
        </div>
        <div class="third__content">
          <h4 class="font__h4">YX1 EARPHONES</h4>
          <ButtonAction text="See Product" variant="secondary" path="/earphones/yx1-earphones" />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonAction from './ButtonAction.vue'

export default defineComponent({
  name: 'HomeProducts',
  components: {
    ButtonAction
  }
})
</script>

<style scoped>
.product__grid {
  display: grid;
  gap: 24px;
  padding: 120px 0;
}

.product__first {
  background: #d87d4a;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background-image: url('@assets/home/desktop/pattern-circles.svg');
  background-size: cover;
  background-position: 50% -140px;
  background-repeat: no-repeat;
}

.first__content,
.first__text-content {
  display: grid;
  justify-items: center;
}

.first__content {
  gap: 32px;
  padding: 55px 24px;
}

.first__img {
  width: 172px;
}

.first__img--desktop {
  display: none;
}

.first__text-content {
  gap: 24px;
}

.first__title {
  width: 100%;
  color: #fff;
  text-align: center;
  font-family: Manrope;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  /* 111.111% */
  letter-spacing: 1.286px;
  text-transform: uppercase;
  white-space: pre-wrap;
  word-break: keep-all;
}

.first__text {
  color: #fff;
  text-align: center;
}

.product__second {
  background-image: url('@assets/home/mobile/image-speaker-zx7.jpg');
  background-color: lightgray;
  background-position: 0px 0px;
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  gap: 32px;
  padding: 148px 0 100px 24px;
  border-radius: 8px;
}

.product__third {
  display: grid;
  gap: 24px;
}

.third__img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
  max-height: 200px;
}

.third__img {
  width: 100%;
}

.third__img--tablet {
  display: none;
}

.third__content {
  border-radius: 8px;
  background-color: #f1f1f1;
  display: grid;
  align-items: center;
  gap: 32px;
  padding: 41px 0 41px 24px;
}

@media (min-width: 768px) {
  .first__text {
    width: 350px;
  }

  .product__second {
    background-image: url('@assets/home/tablet/image-speaker-zx7.jpg');
  }

  .product__third {
    grid-template-columns: 1fr 1fr;
    gap: 11px;
    max-height: 320px;
  }

  .third__img-container {
    max-height: none;
  }

  .third__img--mobile {
    display: none;
  }

  .third__img--tablet {
    display: flex;
  }

  .third__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
}

@media (min-width: 1024px) {
  .product__first {
    background-position: -200px -140px;
  }

  .first__content {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 138px;
    padding: 96px 0 0 117px;
  }

  .first__img {
    width: 410px;
  }

  .first__img--mobile {
    display: none;
  }

  .first__img--desktop {
    display: block;
    transform: translateY(26px);
  }

  .first__text-content {
    width: 100%;
    justify-items: flex-start;
    align-self: flex-start;
    padding-top: 47px;
  }

  .first__title,
  .first__text {
    text-align: left;
  }

  .product__second {
    background-image: url('@assets/home/desktop/image-speaker-zx7.jpg');
  }
}
</style>
