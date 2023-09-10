<template>
  <button v-if="!path && (variant === 'primary' || variant === 'secondary')" class="btn" :class="{
    primary: variant === 'primary',
    secondary: variant === 'secondary',
    btn__full: fullWidth
  }" @click="() => onClick()">
    {{ text }}
  </button>
  <RouterLink v-if="path && (variant === 'primary' || variant === 'secondary')" :to="path" class="btn btn__link" :class="{
    primary: variant === 'primary',
    secondary: variant === 'secondary'
  }">
    {{ text }}
  </RouterLink>
  <RouterLink v-else-if="variant === 'tertiary'" class="btn tertiary" :to="path ?? ''">
    <span>{{ text }}</span>
    <img src="@/assets/shared/desktop/icon-arrow-right.svg" alt="Arrow right" />
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'ButtonAction',
  props: {
    text: {
      type: String,
      required: true
    },
    variant: {
      type: String as () => 'primary' | 'secondary' | 'tertiary',
      required: false,
      default: 'primary'
    },
    path: {
      type: String,
      required: false
    },
    fullWidth: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    RouterLink
  },
  methods: {
    onClick() {
      console.log('Clicked');
      this.$emit('click:btn');
    }
  },
  emits: ['click:btn']
})
</script>

<style>
.btn {
  width: fit-content;
  cursor: pointer;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  height: fit-content;
}

.btn__full {
  width: 100%;
}

.btn__link {
  text-decoration: none;
}

.primary,
.secondary {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  padding: 15px 30px;
}

.primary {
  background-color: #d87d4a;
  color: #fff;
  border: none;
}

.primary:hover {
  background-color: #fbaf85;
}

.secondary {
  color: #000;
  background-color: transparent;
  border: 1px solid #000;
}

.secondary:hover {
  color: #fff;
  background-color: #000;
}

.tertiary {
  color: inherit;
  text-decoration: none;
  padding: 0;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 13px;
}

.tertiary:hover {
  color: #d87d4a;
}
</style>
