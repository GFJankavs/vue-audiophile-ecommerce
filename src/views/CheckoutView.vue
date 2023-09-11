<template>
  <div class="checkout__wrapper">
    <div class="container checkout__container">
      <button class="checkout__back font__body" @click="onGoBack">Go Back</button>
      <div class="checkout__grid">
        <div class="wrapper">
          <div class="checkout__info">
            <h4 class="font__h4">Checkout</h4>
            // TODO: Izveidot formu, lai ievadītu checkout datus
            // TODO: pievienot error state, ja nav aizpildīti visi lauki
            // TODO: pievienot validāciju, lai lauki būtu aizpildīti pareizi
            // TODO: nokačāt libphone priekš telefona numura validācijas
            <div class="checkout__info-section">
              <span class="font__subtitle checkout__title">billing details</span>
              <div class="checkout__inputs checkout__billing">
                <div class="checkout__input">
                  <label class="input__label" for="name">Name</label>
                  <input class="input" type="text" id="name" placeholder="Alexei Ward" />
                </div>
                <div class="checkout__input">
                  <label class="input__label" for="email">Email Address</label>
                  <input class="input" type="email" id="email" placeholder="alexei@mail.com" />
                </div>
                <div class="checkout__input">
                  <label class="input__label" for="phone">Phone Number</label>
                  <input class="input" type="text" id="phone" placeholder="+1 202-555-0136" />
                </div>
              </div>
            </div>
            <div class="checkout__info-section">
              <span class="font__subtitle checkout__title">shipping info</span>
              <div class="checkout__inputs checkout__shipping">
                <div class="checkout__input input__address">
                  <label class="input__label" for="address">Your Address</label>
                  <input class="input" type="text" id="address" placeholder="1137 Williams Avenue" />
                </div>
                <div class="checkout__input input__zip">
                  <label class="input__label" for="zip">ZIP Code</label>
                  <input class="input" type="text" id="zip" placeholder="10001" />
                </div>
                <div class="checkout__input input__city">
                  <label class="input__label" for="city">City</label>
                  <input class="input" type="text" id="city" placeholder="New York" />
                </div>
                <div class="checkout__input input__country">
                  <label class="input__label" for="city">Country</label>
                  //TODO: Izveidot custom input select komponenti no W3Schools
                  <input class="input" type="text" id="city" placeholder="United States" />
                </div>
              </div>
            </div>
            <div class="checkout__info-section">
              <span class="font__subtitle checkout__title">payment details</span>
              <div class="checkout__inputs">
                <div class="checkout__input">
                  <label class="input__label" for="address">Payment Method</label>
                  <input class="input" type="text" id="address" placeholder="1137 Williams Avenue" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="summary">
          <div class="summary__products">
            <div class="summary__top">
              <h6 class="font__h6">Summary</h6>
            </div>
            <div class="summary__items" v-if="cart.length > 0">
              <div v-for="item of cart" :key="item.id" class="item">
                <div class="item__product">
                  <img :src="item.img" :alt="item.name" class="item__img" />
                  <div class="item__text">
                    <h5 class="font__body item__name">{{ formatName(item.name) }}</h5>
                    <span class="item__price">$ {{ numberWithCommas(item.price) }}</span>
                  </div>
                </div>
                <span class="font__body item__amount"> x{{ item.amount }} </span>
              </div>
            </div>
            <div class="summary__info-grid">
              <div class="info__top">
                <div class="summary__info">
                  <h6 class="font__body info__title">TOTAL</h6>
                  <span class="font__h6">$ {{ numberWithCommas(cartTotal) }}</span>
                </div>
                <div class="summary__info">
                  <h6 class="font__body info__title">SHIPPING</h6>
                  <span class="font__h6">$ {{ numberWithCommas(cartShipping) }}</span>
                </div>
                <div class="summary__info">
                  <h6 class="font__body info__title">VAT (INCLUDED)</h6>
                  <span class="font__h6">$ {{ numberWithCommas(Math.round(cartVat)) }}</span>
                </div>
              </div>
              <div class="summary__info">
                <h6 class="font__body info__title">GRAND TOTAL</h6>
                <span class="font__h6">$ {{ numberWithCommas(cartTotal + cartShipping) }}</span>
              </div>
            </div>
          </div>
          <div class="summary__btn">
            <ButtonAction text="Continue & Pay" variant="primary" :fullWidth="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonAction from '@/components/ButtonAction.vue'
import { formatName, numberWithCommas } from '@/helpers'
import router from '@/router'
import { useCartStore } from '@/stores/useCartStore'
import { toRaw } from 'vue'

const store = useCartStore()

console.log(toRaw(store))

const { cart, cartTotal, cartShipping, cartVat } = useCartStore()

const onGoBack = () => {
  router.back()
}
</script>

<style scoped>
.checkout__wrapper {
  height: 100%;
  background-color: #fafafa;
}

.checkout__container {
  height: 100%;
}

.checkout__back {
  all: unset;
  cursor: pointer;
  margin: 16px 0 24px;
}

.checkout__grid {
  display: grid;
  gap: 32px;
  padding-bottom: 96px;
}

.wrapper {
  background: #fff;
  border-radius: 8px;
  padding: 30px 27px;
}

.checkout__info {
  display: grid;
  gap: 32px;
}

.checkout__info-section {
  display: grid;
  gap: 16px;
}

.checkout__title {
  color: #d87d4a;
}

.checkout__inputs {
  display: grid;
  gap: 24px;
}

.checkout__input {
  display: grid;
  gap: 9px;
}

.input__label {
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.214px;
}

.input {
  background: #fff;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  padding: 18px 24px 19px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
}

.input::placeholder {
  opacity: 0.4;
}

.summary {
  border-radius: 8px;
  background-color: #fff;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  user-select: none;
  width: 100%;
}

.summary__products {
  display: grid;
  gap: 32px;
}

.summary__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.summary__items {
  display: grid;
  gap: 24px;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
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

.item__name {
  color: #000;
  font-weight: 700;
}

.item__amount {
  color: #000;
  font-weight: 700;
  opacity: 0.5;
}

.item__price {
  opacity: 0.5;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
}

.summary__info-grid {
  display: grid;
  gap: 24px;
}

.summary__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.summary__btn {
  height: 48px;
  width: 100%;
}

.info__title {
  font-weight: 500;
  opacity: 0.5;
}

@media (min-width: 768px) {
  .checkout__billing {
    grid-template-columns: 1fr 1fr;
    gap: 24px 16px;
  }

  .checkout__shipping {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      'address address'
      'zip city'
      'country .';
  }

  .input__address {
    grid-area: address;
  }

  .input__zip {
    grid-area: zip;
  }

  .input__city {
    grid-area: city;
  }

  .input__country {
    grid-area: country;
  }
}

@media (min-width: 1024px) {
  .checkout__grid {
    grid-template-columns: 1fr 350px;
    gap: 0 30px;
  }

  .summary {
    height: fit-content;
  }
}
</style>
