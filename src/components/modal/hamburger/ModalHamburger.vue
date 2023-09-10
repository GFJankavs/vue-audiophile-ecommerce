<template>
  <div class="menu__wrapper">
    <div class="menu">
      <ProductCategories />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProductCategories from '../../ProductCategories.vue'
</script>

<style scoped>
.menu__wrapper {
  position: relative;
}

.menu {
  position: absolute;
  top: 90px;
  left: -24px;
  display: flex;
  justify-content: center;
  border-radius: 0 0 8px 8px;
  background-color: #fff;
  width: 100vw;
  min-height: 750px;
}

@media (min-width: 768px) {
  .menu {
    width: 100%;
    min-height: 340px;
    left: 0;
  }
}
</style>
