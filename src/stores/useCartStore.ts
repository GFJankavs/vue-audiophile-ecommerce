import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

interface CartItem {
  id: number
  img: string
  name: string
  price: number
  amount: number
}

interface ICartState {
  cart: CartItem[]
}

const basicState = { cart: [] }

export const useCartStore = defineStore('cart', {
  state: (): ICartState => ({
    cart: useStorage('audiophile_cart', basicState.cart)
  }),
  actions: {
    addToCart(item: CartItem) {
      const cartArray = this.cart
      const itemIndex = cartArray.findIndex((cartItem) => cartItem.id === item.id)
      console.log(itemIndex)
      if (itemIndex !== -1) {
        cartArray[itemIndex].amount += item.amount
      } else {
        cartArray.push(item)
      }
      this.cart = cartArray
    },
    clearCart() {
      this.$state = basicState
    }
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce((acc, item) => acc + item.price * item.amount, 0)
    },
    cartVat(state) {
      return state.cart.reduce((acc, item) => acc + item.price * item.amount * 0.2, 0)
    },
    cartShipping() {
      return 50
    }
  }
})
