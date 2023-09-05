<template>
  <button
    v-if="variant === 'primary' || variant === 'secondary'"
    class="btn"
    :class="{
      primary: variant === 'primary',
      secondary: variant === 'secondary'
    }"
  >
    {{ text }}
  </button>
  <a v-else-if="variant === 'tertiary'" class="btn tertiary">
    <span>{{ text }}</span>
    <img src="@/assets/shared/desktop/icon-arrow-right.svg" alt="Arrow right" />
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
    }
  }
})
</script>

<style scoped>
.btn {
  width: fit-content;
  cursor: pointer;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  height: min-content;
}

.primary,
.secondary {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  padding: 15px 30px;
  border: 1px solid #000;
}

.primary {
  background-color: #d87d4a;
  color: #fff;
}

.primary:hover {
  background-color: #fbaf85;
}

.secondary {
  color: #000;
  background-color: transparent;
}

.secondary:hover {
  color: #fff;
  background-color: #000;
}

.tertiary {
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
