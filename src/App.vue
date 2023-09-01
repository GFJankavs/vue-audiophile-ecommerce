<script setup lang="ts">
import HamburgerMenu from './components/HamburgerMenu.vue';

HamburgerMenu
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <nav>
        <HamburgerMenu />
        <img src="./assets/audiophile_logo.svg" alt="Logo" />
        <button>
          <img src="./assets/icon-cart.svg" alt="Cart" />
        </button>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: #191919;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.104);
}

nav button {
  all: unset;
  display: grid;
  place-items: center;
}
</style>
