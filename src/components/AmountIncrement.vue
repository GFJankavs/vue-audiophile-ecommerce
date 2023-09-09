<template>
  <div class="cart__add-wrapper">
    <button class="btn__add font__subtitle" @click="onValueChange('decrease')">-</button>
    <span>{{ value }}</span>
    <button class="btn__add font__subtitle" @click="onValueChange('increase')">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AmountIncrement',
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  emits: ['update:value'],
  methods: {
    onValueChange(type: 'increase' | 'decrease') {
      if (type === 'increase') {
        this.$emit('update:value', this.value + 1)
        return
      }
      if (type === 'decrease') {
        if (this.value === 1) return
        this.$emit('update:value', this.value - 1)
        return
      }
    }
  }
})
</script>

<style scoped>
.cart__add-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #f1f1f1;
  height: 100%;
}

.btn__add {
  all: unset;
  padding: 0 15px;
  opacity: 0.25;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  height: 100%;
}

.btn__add:hover {
  opacity: 1;
}
</style>
