<template>
  <div class="wrapper">
    <div class="success__container">
      <div class="success__content">
        <img
          src="@assets/checkout/icon-order-confirmation.svg"
          alt="Order confirmation"
          class="success__icon"
        />
        <div class="success__text-container">
          <h5 class="font__h5">THANK YOU FOR YOUR ORDER</h5>
          <p class="font__body success__msg">You will receive an email confirmation shortly.</p>
        </div>
        <div class="success__products">
          <div class="products__top">
            <div class="product__grid">
              <div class="product__wrapper" v-for="product of productsToDisplay" :key="product.id">
                <div class="product__flex">
                  <img :src="product.img" :alt="product.name" class="product__img" />
                  <div class="product__info">
                    <span class="font__body product__title">{{ formatName(product.name) }}</span>
                    <span class="product__price">$ {{ numberWithCommas(product.price) }}</span>
                  </div>
                </div>
                <span class="product__amount">x{{ product.amount }}</span>
              </div>
            </div>
            <div class="divider" v-if="cart.length > 1" />
            <p class="product__other" v-if="cart.length > 1" @click="toggleAll">
              {{ showAll ? 'View Less' : `and ${cart.slice(1).length} other item(s)` }}
            </p>
          </div>
          <div class="products__bottom">
            <div class="bottom__content">
              <span class="font__body bottom__title">GRAND TOTAL</span>
              <h6 class="font__h6 bottom__grand">$ {{ numberWithCommas(grandTotal) }}</h6>
            </div>
          </div>
        </div>
        <div class="success__btn">
          <ButtonAction
            text="Back to home"
            path="/"
            variant="primary"
            full-width
            @click:btn="onGoBack"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ButtonAction from '@/components/ButtonAction.vue'
import { formatName, numberWithCommas } from '@/helpers'
import { useCartStore } from '@/stores/useCartStore'
import { computed, ref } from 'vue'

const { cart, cartShipping, cartTotal, clearCart } = useCartStore()

const grandTotal = computed(() => cartTotal + cartShipping)

const onGoBack = () => {
  clearCart()
}

const showAll = ref(false)

const toggleAll = () => {
  showAll.value = !showAll.value
}

const productsToDisplay = computed(() => {
  if (showAll.value) {
    return cart
  }

  return cart.slice(0, 1)
})
</script>

<style scoped>
.wrapper {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
}

.success__container {
  width: 100%;
  max-width: none;
  border-radius: 8px;
  background-color: #fff;
  padding: 32px;
}

.success__content {
  display: grid;
  gap: 24px;
}

.success__icon {
  width: 64px;
  height: 64px;
}

.success__text-container {
  display: grid;
  gap: 16px;
}

.success__msg {
  opacity: 0.5;
}

.success__products {
  background-color: #f1f1f1;
}

.products__top {
  border-radius: 8px 8px 0 0;
  display: grid;
  gap: 12px;
  padding: 24px;
}

.product__grid {
  display: grid;
  gap: 16px;
}

.product__wrapper {
  display: flex;
  justify-content: space-between;
}

.product__flex {
  display: flex;
  align-items: center;
  gap: 27px;
}

.product__info {
  display: grid;
  width: fit-content;
}

.product__img {
  width: 50px;
  height: 50px;
}

.product__title {
  font-weight: 700;
}

.product__price {
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  opacity: 0.5;
}

.product__amount {
  opacity: 0.5;
  text-align: right;
  font-weight: 700;
}

.product__other {
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.214px;
  opacity: 0.5;
  text-align: center;
  cursor: pointer;
}

.divider {
  width: 100%;
  height: 1px;
  opacity: 0.08;
  background-color: #000;
}

.products__bottom {
  display: flex;
  align-items: flex-end;
  background-color: #000;
  padding: 24px;
  border-radius: 0 0 8px 8px;
}

.bottom__content {
  display: grid;
  gap: 8px;
  color: #fff;
}

.bottom__title {
  opacity: 0.5;
}

@media (min-width: 768px) {
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 132px;
  }

  .success__container {
    max-width: 540px;
  }

  .success__products {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
  }

  .products__top {
    border-radius: 8px 0 0 8px;
  }

  .products__bottom {
    width: 100%;
    padding: 42px 24px;
    border-radius: 0 8px 8px 0;
  }
}
</style>
