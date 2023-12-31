<template>
  <div class="category__wrapper" :class="imgClass">
    <div class="category">
      <div class="category__img-container">
        <img
          :src="getImgUrl().href"
          :alt="text.slice(0, 1).toUpperCase() + text.slice(1)"
          class="img"
          :class="{ earphones: isEarphones(text) }"
        />
      </div>
      <div class="category__bottom">
        <span class="font__body">{{ text.toUpperCase() }}</span>
        <ButtonAction text="shop" variant="tertiary" :path="`/${text}`" />
      </div>
    </div>
    <div class="category__bg" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ButtonAction from './ButtonAction.vue'

export default defineComponent({
  name: 'HomeProduct',
  props: {
    text: {
      type: String,
      required: true
    },
    img_filename: {
      type: String,
      required: true
    }
  },
  components: {
    ButtonAction
  },
  computed: {
    imgClass() {
      return {
        speakers: this.text === 'speakers',
        headphones: this.text === 'headphones',
        earphones: this.text === 'earphones'
      }
    }
  },
  methods: {
    getImgUrl() {
      return new URL(`/src/assets/shared/desktop/${this.img_filename}.png`, import.meta.url)
    },
    isSpeaker(text: string) {
      return text === 'speakers'
    },
    isHeadphones(text: string) {
      return text === 'headphones'
    },
    isEarphones(text: string) {
      return text === 'earphones'
    }
  }
})
</script>

<style scoped>
.category__wrapper {
  position: relative;
  width: 100%;
}

.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 3;
  width: 100%;
}

.category__bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 165px;
  background-color: #f1f1f1;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
}

.headphones .category__bg {
  transform: translateY(54px);
}

.speakers .category__bg {
  transform: translateY(54px);
}

.earphones .category__bg {
  transform: translateY(40px);
}

.headphones .category__bottom {
  transform: translateY(-30%);
}

.speakers .category__bottom {
  transform: translateY(-23%);
}

.earphones .category__bottom {
  transform: translateY(-30%);
}

.category__img-container {
  position: relative;
  display: grid;
  justify-items: center;
}

.category__bottom {
  display: grid;
  gap: 17px;
  justify-items: center;
}

.img {
  width: 150px;
}

.speakers img.img {
  width: 150px;
}

.link__hover {
  color: #d87d4a;
}

@media (min-width: 768px) {
  .earphones .category__bottom {
    transform: translateY(-7%);
  }

  .earphones .category__bg {
    transform: translateY(53px);
  }

  .img.earphones {
    transform: translateY(7%);
  }
}
</style>
