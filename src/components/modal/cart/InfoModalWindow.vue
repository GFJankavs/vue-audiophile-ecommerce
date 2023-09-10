<template>
  <div class="inner__wrapper" @click.self="closeModal">
    <div class="inner">
      <div class="cart__products">
        <div class="cart__top">
          <h6 class="font__h6">CART {{ `(${cart.length})` }}</h6>
          <button title="" @click="onRemoveAll" :disabled="cart.length === 0">Remove all</button>
        </div>
        <div class="cart__items" v-if="cart.length > 0">
          <div v-for="item of cart" :key="item.id" class="item">
            <div class="item__product">
              <img :src="item.img" :alt="item.name" class="item__img" />
              <div class="item__text">
                <h5 class="font__body">{{ formatName(item.name) }}</h5>
                <span class="item__price">$ {{ numberWithCommas(item.price) }}</span>
              </div>
            </div>
            <div class="amount__container">
              <AmountIncrement :value="item.amount" />
            </div>
          </div>
        </div>
        <div class="cart__total" v-if="cart.length > 0">
          <h6 class="font__body total__title">TOTAL</h6>
          <span class="font__h6">$ {{ numberWithCommas(cartTotal) }}</span>
        </div>
        <div class="cart__empty" v-if="cart.length === 0">
          <h6 class="font__body cart__empty-text">Your cart is empty</h6>
        </div>
      </div>
      <div class="cart__btn">
        <ButtonAction text="Checkout" variant="primary" :fullWidth="true" path="/checkout" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AmountIncrement from '@/components/AmountIncrement.vue'
import ButtonAction from '@/components/ButtonAction.vue'
import { useCartStore } from '@/stores/useCartStore'
import useModalStore from '@/stores/useModalStore'

const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const formatName = (name: string) => {
  let formattedName = name.trim()

  formattedName = formattedName.replace('Headphones', '')
  formattedName = formattedName.replace('Earphones', '')
  formattedName = formattedName.replace('Speaker', '')
  formattedName = formattedName.replace('Wireless', '')

  formattedName = formattedName.replace('Mark I', 'MK I')
  formattedName = formattedName.replace('Mark II', 'MK II')

  formattedName = formattedName.trim()

  return formattedName
}

const { cartTotal, cart, clearCart } = useCartStore()

const { closeModal } = useModalStore()

const onRemoveAll = () => {
  clearCart()
  closeModal()
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.inner__wrapper {
  position: relative;
  top: 114px;
  display: grid;
  justify-items: center;
}

.inner {
  border-radius: 8px;
  background-color: #fff;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  user-select: none;
  width: 377px;
}

.cart__products {
  display: grid;
  gap: 32px;
}

.cart__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart__items {
  display: grid;
  gap: 24px;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
}

.item__product {
  display: flex;
  align-items: center;
  gap: 16px;
}

.item__img {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background-color: #f1f1f1;
}

.item__text {
  display: grid;
}

.item__price {
  opacity: 0.5;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
}

.amount__container {
  width: 96px;
  height: 32px;
}

.cart__total {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.total__title {
  opacity: 0.5;
}

.cart__btn {
  height: 48px;
}

.cart__empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.cart__empty-text {
  font-size: 18px;
}

@media (min-width: 768px) {
  .inner__wrapper {
    justify-items: flex-end;
  }
}
</style>
@/stores/useCartStore
