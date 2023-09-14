<template>
  <div class="checkout__wrapper">
    <div class="container checkout__container">
      <button class="checkout__back font__body" @click="onGoBack">Go Back</button>
      <form class="checkout__grid" @submit.prevent="onFormSubmit">
        <div class="wrapper">
          <div class="checkout__info">
            <h4 class="font__h4">Checkout</h4>
            <div class="checkout__info-section">
              <span class="font__subtitle checkout__title">billing details</span>
              <div class="checkout__inputs checkout__billing">
                <div class="checkout__input" :class="{ error: error?.input === 'name' }">
                  <div class="label__flex">
                    <label class="input__label" for="name">Name</label>
                    <span class="error__text" v-if="error?.input === 'name'">{{ error?.msg }}</span>
                  </div>
                  <input
                    class="input"
                    type="text"
                    id="name"
                    placeholder="Alexei Ward"
                    v-model="formData.name"
                  />
                </div>
                <div class="checkout__input" :class="{ error: error?.input === 'email' }">
                  <div class="label__flex">
                    <label class="input__label" for="email">Email Address</label>
                    <span class="error__text" v-if="error?.input === 'email'">{{
                      error?.msg
                    }}</span>
                  </div>
                  <input
                    class="input"
                    type="email"
                    id="email"
                    placeholder="alexei@mail.com"
                    v-model="formData.email"
                  />
                </div>
                <div class="checkout__input" :class="{ error: error?.input === 'phone' }">
                  <div class="label__flex">
                    <label class="input__label" for="phone">Phone Number</label>
                    <span class="error__text" v-if="error?.input === 'phone'">{{
                      error?.msg
                    }}</span>
                  </div>
                  <input
                    class="input"
                    type="text"
                    id="phone"
                    placeholder="+1 202-555-0136"
                    v-model="formData.phone"
                  />
                </div>
              </div>
            </div>
            <div class="checkout__info-section">
              <span class="font__subtitle checkout__title">shipping info</span>
              <div class="checkout__inputs checkout__shipping">
                <div
                  class="checkout__input input__address"
                  :class="{ error: error?.input === 'address' }"
                >
                  <div class="label__flex">
                    <label class="input__label" for="address">Your Address</label>
                    <span class="error__text" v-if="error?.input === 'address'">{{
                      error?.msg
                    }}</span>
                  </div>
                  <input
                    class="input"
                    type="text"
                    id="address"
                    placeholder="1137 Williams Avenue"
                    v-model="formData.address"
                  />
                </div>
                <div class="checkout__input input__zip" :class="{ error: error?.input === 'zip' }">
                  <div class="label__flex">
                    <label class="input__label" for="zip">ZIP Code</label>
                    <span class="error__text" v-if="error?.input === 'zip'">{{ error?.msg }}</span>
                  </div>
                  <input
                    class="input input__number"
                    type="number"
                    id="zip"
                    placeholder="10001"
                    v-model="formData.zip"
                    @keydown="onNumberInputKeydown"
                  />
                </div>
                <div
                  class="checkout__input input__city"
                  :class="{ error: error?.input === 'city' }"
                >
                  <div class="label__flex">
                    <label class="input__label" for="city">City</label>
                    <span class="error__text" v-if="error?.input === 'city'">{{ error?.msg }}</span>
                  </div>
                  <input
                    class="input"
                    type="text"
                    id="city"
                    placeholder="New York"
                    v-model="formData.city"
                  />
                </div>
                <div
                  class="checkout__input input__country"
                  :class="{ error: error?.input === 'country' }"
                >
                  <div class="label__flex">
                    <label class="input__label" for="city">Country</label>
                    <span class="error__text" v-if="error?.input === 'country'">{{
                      error?.msg
                    }}</span>
                  </div>
                  <SearchAutocomplete
                    :items="countries.map((country) => country.name)"
                    :value="formData.country"
                    @input:change="onCountryUpdate"
                    placeholder="United States"
                  />
                </div>
              </div>
            </div>
            <div
              class="checkout__payments"
              :class="{ checkout__cash: formData.payment === 'cash' }"
            >
              <div class="checkout__info-section">
                <span class="font__subtitle checkout__title">payment details</span>
                <div class="checkout__inputs">
                  <div class="checkout__input checkout__radio">
                    <label class="input__label" for="address">Payment Method</label>
                    <div class="radio__grid">
                      <CheckoutRadioInput
                        text="e-Money"
                        :checked="formData.payment === 'money'"
                        name="money"
                        @radio:selected="onPaymentSelect"
                      />
                      <CheckoutRadioInput
                        text="Cash on Delivery"
                        :checked="formData.payment === 'cash'"
                        name="cash"
                        @radio:selected="onPaymentSelect"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="money__grid" v-if="formData.payment === 'money'">
                <div class="checkout__input" :class="{ error: error?.input === 'money_number' }">
                  <div class="label__flex">
                    <label class="input__label" for="money_number">e-Money Number</label>
                    <span class="error__text" v-if="error?.input === 'money_number'">{{
                      error?.msg
                    }}</span>
                  </div>
                  <input
                    class="input input__number"
                    type="number"
                    id="money_number"
                    placeholder="238521993"
                    v-model="formData.eMoney.number"
                    @keydown="onNumberInputKeydown"
                    maxlength="9"
                  />
                </div>
                <div class="checkout__input" :class="{ error: error?.input === 'money_pin' }">
                  <div class="label__flex">
                    <label class="input__label" for="money_pin">e-Money PIN</label>
                    <span class="error__text" v-if="error?.input === 'money_pin'">{{
                      error?.msg
                    }}</span>
                  </div>
                  <input
                    class="input input__number"
                    type="number"
                    id="money_pin"
                    placeholder="6891"
                    v-model="formData.eMoney.pin"
                    @keydown="onNumberInputKeydown"
                    maxlength="4"
                  />
                </div>
              </div>
              <div class="cash__info-container" v-if="formData.payment === 'cash'">
                <img src="@assets/checkout/icon-cash-on-delivery.svg" alt="Cash on Delivery" />
                <p class="font__body cash__info-text">
                  The &#x2018;Cash on Delivery&#x2019; option enables you to pay in cash when our
                  delivery courier arrives at your residence. Just make sure your address is correct
                  so that your order will not be cancelled.
                </p>
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
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as EmailValidator from 'email-validator'
import ButtonAction from '@/components/ButtonAction.vue'
import CheckoutModal from '@/components/modal/checkout/CheckoutModal.vue'
import { checkIfEveryInputFilled, formatName, numberWithCommas } from '@/helpers'
import { type CheckoutFormData } from '@/types'
import router from '@/router'
import { useCartStore } from '@/stores/useCartStore'
import { ref, watch } from 'vue'
import { countries } from '@/data/countries'
import SearchAutocomplete from '@/components/SearchAutocomplete.vue'
import CheckoutRadioInput from '@/components/CheckoutRadioInput.vue'
import { isValidNumber, type CountryCode } from 'libphonenumber-js'
import useModalStore from '@/stores/useModalStore'

const { openModal } = useModalStore()

const findCountry = (query: string) => {
  if (!query) return

  const country = countries.find((country) =>
    country.name.toLowerCase().includes(query.toLowerCase())
  )

  return country
}

const onNumberInputKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault()
  }
}

const onCountryUpdate = (value: string) => {
  const existingCountry = findCountry(value)

  if (existingCountry) {
    formData.value.country = existingCountry
  } else {
    formData.value.country = { name: value, code: '' }
  }
}

const onFormSubmit = () => {
  error.value = null

  const result: { input: string; msg: string } | boolean = checkIfEveryInputFilled(formData.value)

  if (result !== true) {
    error.value = result
    return
  }

  const country = findCountry(formData.value.country.name)

  if (!EmailValidator.validate(formData.value.email)) {
    error.value = { input: 'email', msg: 'Invalid email address' }
    return
  }

  if (!country) {
    error.value = { input: 'country', msg: 'Invalid country' }
    return
  }

  if (!isValidNumber(formData.value.phone, country.code as CountryCode)) {
    error.value = { input: 'phone', msg: 'Invalid phone number' }
    return
  }

  if (formData.value.payment === 'money' && formData.value.eMoney.pin.length !== 4) {
    error.value = { input: 'money_pin', msg: 'Invalid e-Money PIN' }
    return
  }

  openModal({
    component: CheckoutModal,
    isOpen: true,
    isHamburger: false
  })
}

const onPaymentSelect = (name: 'money' | 'cash') => {
  if (name === formData.value.payment) return
  formData.value.payment = name
}

const { cart, cartTotal, cartShipping, cartVat } = useCartStore()

const onGoBack = () => {
  router.back()
}

const formData = ref<CheckoutFormData>({
  name: '',
  email: '',
  phone: '',
  address: '',
  zip: '',
  city: '',
  country: {
    name: '',
    code: ''
  },
  payment: 'money',
  eMoney: {
    number: '',
    pin: ''
  }
})

const error = ref<{ input: string; msg: string } | null>(null)

watch(formData, (value) => {
  console.log(value)
})
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
  padding: 24px;
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

.checkout__input.error .input__label {
  color: #cd2c2c;
}

.checkout__input.error .input {
  border-color: #cd2c2c;
}

.checkout__input.error .error__text {
  color: #cd2c2c;
  text-align: right;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.214px;
}

.label__flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  caret-color: #d87d4a;
}

.input:focus {
  outline: none;
  border-color: #d87d4a;
}

.input::placeholder {
  opacity: 0.4;
}

.input__number {
  appearance: textfield;
  -moz-appearance: textfield;
}

.input__number::-webkit-outer-spin-button,
.input__number::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.cash__info-container {
  display: flex;
  align-items: center;
  gap: 32px;
}

.cash__info-text {
  opacity: 0.5;
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

.radio__grid {
  display: grid;
  gap: 16px;
}

.checkout__payments {
  display: grid;
  gap: 32px;
}

.money__grid {
  display: grid;
  gap: 24px;
}

@media (min-width: 768px) {
  .wrapper {
    padding: 30px 27px;
  }

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

  .checkout__payments {
    gap: 24px;
  }

  .checkout__payments.checkout__cash {
    gap: 30px;
  }

  .checkout__radio {
    grid-template-columns: 1fr 1fr;
  }

  .money__grid {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
}

@media (min-width: 1024px) {
  .wrapper {
    padding: 50px 48px 48px;
  }

  .checkout__grid {
    grid-template-columns: 1fr 350px;
    gap: 0 30px;
  }

  .summary {
    height: fit-content;
  }
}
</style>
