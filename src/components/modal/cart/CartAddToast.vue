<template>
  <div class="toast__grid">
    <span class="font__body">Product has been added to cart</span>
    <span>
      <a href="/checkout" class="toast__link">Go to Checkout</a>
    </span>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.toast__grid {
  display: grid;
  gap: 8px;
  color: #fff;
}

.toast__link {
  display: inline-block;
  all: unset;
  cursor: pointer;
}

.toast__link:hover {
  text-decoration: underline;
}
</style>
