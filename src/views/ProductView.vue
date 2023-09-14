<template>
  <div class="product__grid">
    <div class="container">
      <button class="btn__back font__body" @click="goBack">Go Back</button>
      <div class="detail">
        <div class="detail__info">
          <picture>
            <source
              :srcset="product.image.desktop"
              media="(min-width: 1024px)"
              class="detail__img"
            />
            <source :srcset="product.image.tablet" media="(min-width: 768px)" class="detail__img" />
            <img :src="product.image.mobile" :alt="product.name" class="detail__img" />
          </picture>
          <div class="detail__product">
            <div class="detail__text">
              <span v-if="product.new" class="font__overline detail__new">new product</span>
              <h4 class="font__h4">
                {{ product.name }}
              </h4>
              <p class="font__body detail__description">
                {{ product.description }}
              </p>
              <h6 class="font__h6 detail__price">$ {{ numberWithCommas(product.price) }}</h6>
            </div>
            <div class="detail__cart-container">
              <div class="amount__container">
                <AmountIncrement :value="amount" @update:value="updateAmount" />
              </div>
              <ButtonAction text="Add to cart" @click:btn="onAddToCart" />
            </div>
          </div>
        </div>
        <div class="detail__extra">
          <div class="detail__features">
            <h5 class="font__h5">Features</h5>
            <div class="features__paragraphs">
              <p
                v-for="paragraph of featuresParagraphs"
                :key="paragraph"
                class="font__body detail__description"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>
          <div class="detail__included-wrapper">
            <div class="detail__included">
              <h5 class="font__h5 included__title">in the box</h5>
              <table class="included__table">
                <tr v-for="include of product.includes" :key="include.item">
                  <td class="included__quantity font__body">{{ include.quantity }}x</td>
                  <td class="included__item">
                    {{ include.item }}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <ProductGallery :product-slug="product.slug" />
        <div class="detail__others">
          <h5 class="font__h5">you may also like</h5>
          <div class="others__grid">
            <div v-for="item of product.others" :key="item.slug">
              <div class="item__grid">
                <picture>
                  <source
                    :srcset="item.image.desktop"
                    media="(min-width: 1024px)"
                    class="item__img"
                  />
                  <source
                    :srcset="item.image.tablet"
                    media="(min-width: 768px)"
                    class="item__img"
                  />
                  <img :src="item.image.mobile" :alt="item.name" class="item__img" />
                </picture>
                <div class="item__content">
                  <h5 class="font__h5">{{ item.name }}</h5>
                  <ButtonAction
                    text="See Product"
                    :path="`/${$route.params.category.toString()}/${item.slug}`"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ProductCategories />
    <HomepageInfo />
  </div>
</template>

<script lang="ts">
import AmountIncrement from '@/components/AmountIncrement.vue'
import ButtonAction from '@/components/ButtonAction.vue'
import HomepageInfo from '@/components/HomepageInfo.vue'
import ProductCategories from '@/components/ProductCategories.vue'
import ProductGallery from '@/components/ProductGallery.vue'
import CartAddToast from '@/components/modal/cart/CartAddToast.vue'
import router from '@/router'
import { useCartStore } from '@/stores/useCartStore'
import type { AudiophileData } from '@/types'
import { defineComponent } from 'vue'
import { useToast } from 'vue-toastification'
import ProductsData from '@/data/data.json'

const store = useCartStore()

export default defineComponent({
  name: 'ProductView',
  setup() {
    const toast = useToast()

    return { toast }
  },
  components: {
    ProductCategories,
    HomepageInfo,
    ButtonAction,
    ProductGallery,
    AmountIncrement
  },
  data() {
    return {
      product: {} as AudiophileData,
      amount: 1
    }
  },
  methods: {
    goBack() {
      router.go(-1)
    },
    getProductData(productParam: string | string[]) {
      if (Array.isArray(productParam)) return
      const product = (ProductsData as AudiophileData[]).find(
        (product: AudiophileData) => product.slug === productParam
      )
      if (!product) return
      this.product = product
    },
    numberWithCommas(x: number) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    updateAmount(value: number) {
      this.amount = value
    },
    resetAmount() {
      this.amount = 1
    },
    onAddToCart() {
      store.addToCart({
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        img: this.product.image.desktop,
        amount: this.amount
      })
      this.resetAmount()
      this.toast.success(CartAddToast, {
        timeout: false,
        closeOnClick: true,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: 'button',
        icon: true,
        rtl: false,
        toastClassName: ['product__add-toast'],
        closeButtonClassName: ['toast__close-button']
      })
    }
  },
  async created() {
    this.getProductData(this.$route.params.product)
  },
  async updated() {
    this.getProductData(this.$route.params.product)
  },
  computed: {
    featuresParagraphs() {
      return this.product.features.split('\n')
    }
  }
})
</script>

<style scoped>
.btn__back {
  all: unset;
  cursor: pointer;
  margin: 16px 0 24px;
}

.product__grid {
  display: grid;
  gap: 120px;
}

.detail {
  display: grid;
  gap: 88px;
}

.detail__info {
  display: grid;
  gap: 32px;
}

.detail__extra {
  display: grid;
  gap: 88px;
}

.detail__product {
  display: grid;
  gap: 32px;
}

.detail__img {
  width: 100%;
  border-radius: 8px;
  background: #f1f1f1;
}

.detail__text {
  display: grid;
  gap: 24px;
}

.detail__new {
  color: #d87d4a;
}

.included__item,
.detail__description {
  opacity: 0.5;
}

.detail__cart-container {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 46px;
}

.detail__features {
  display: grid;
  gap: 24px;
}

.features__paragraphs {
  display: grid;
  gap: 15px;
}

.detail__included {
  display: grid;
  gap: 24px;
}

.included__title {
  display: inline;
}

.included__quantity {
  width: 40px;
  color: #d87d4a;
  font-weight: 700;
}

.detail__others {
  display: grid;
  gap: 40px;
  text-align: center;
}

.others__grid {
  display: grid;
  gap: 56px;
}

.item__img {
  width: 100%;
  border-radius: 8px;
  background: #f1f1f1;
}

.item__grid {
  display: grid;
  gap: 32px;
  justify-items: center;
}

.item__content {
  display: grid;
  gap: 32px;
}

.amount__container {
  width: 120px;
  height: 46px;
}

@media (min-width: 768px) {
  .detail__info {
    grid-template-columns: 1fr 1fr;
    gap: 70px;
    align-items: center;
  }

  .detail__included {
    grid-template-columns: 250px 1fr;
    gap: 0;
  }

  .others__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .item__grid {
    gap: 40px;
  }
}

@media (min-width: 1024px) {
  .detail__info {
    gap: 125px;
  }

  .detail__extra {
    grid-template-columns: minmax(300px, 635px) 1fr;
    gap: 70px;
  }

  .detail__included {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .others__grid {
    gap: 30px;
  }
}
</style>
