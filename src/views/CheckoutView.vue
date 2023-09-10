<template>
  <div class="container">
    <button class="checkout__back font__body" @click="onGoBack">Go Back</button>
    <div class="checkout__grid">
      <div class="wrapper">
        <div class="checkout__info">
          <h4 class="font__h4">Checkout</h4>
          <div class="checkout__info-section">
            <span class="font__subtitle checkout__title">billing details</span>
          </div>
        </div>
      </div>
      <div>Summary</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'

const onGoBack = () => {
  router.back()
}
</script>

<style scoped>
.checkout__back {
  all: unset;
  cursor: pointer;
  margin: 16px 0 24px;
}

.checkout__grid {
  display: grid;
  gap: 32px;
  margin-bottom: 96px;
}

.wrapper {
  background: #fff;
  border-radius: 8px;
}

.checkout__info {
  display: grid;
  gap: 32px;
}

.checkout__info-section {
  display: grid;
  gap: 16px;
}

.checkout__inputs {
  display: grid;
  gap: 24px;
}
</style>
