<script setup lang="ts">
import { ref } from 'vue'
import ModalHamburger from './modal/hamburger/ModalHamburger.vue'
import useModalStore from '@/stores/useModalStore'
import CartModal from './modal/cart/CartModal.vue';

const store = useModalStore()

const openInfoModal = () => {
  store.openModal({
    component: CartModal,
    isOpen: true,
    isHamburger: false
  })
}

const openHamburgerMenu = () => {
  store.openModal({
    component: ModalHamburger,
    isOpen: true,
    isHamburger: true
  })
}
const links = ref<{ name: string; path: string }[]>([
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Headphones',
    path: '/headphones'
  },
  {
    name: 'Speakers',
    path: '/speakers'
  },
  {
    name: 'Earphones',
    path: '/earphones'
  }
])
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <nav>
        <button class="btn__hamburger" @click="openHamburgerMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
          >
            <rect width="16" height="3" fill="white" />
            <rect y="6" width="16" height="3" fill="white" />
            <rect y="12" width="16" height="3" fill="white" />
          </svg>
        </button>
        <!-- <HamburgerMenu class="hamburger" /> -->
        <img src="@assets/audiophile_logo.svg" alt="Logo" />
        <ul class="nav__links">
          <RouterLink
            v-for="link of links"
            :key="link.name"
            :to="link.path"
            class="font__subtitle nav__link"
            >{{ link.name }}</RouterLink
          >
        </ul>
        <button @click="openInfoModal">
          <img src="@assets/icon-cart.svg" alt="Cart" />
        </button>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  z-index: 99;
  background-color: #000;
  min-width: 100vw;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}

nav button {
  all: unset;
  display: grid;
  place-items: center;
}

.nav__links {
  display: none;
}

.nav__link {
  all: unset;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
}

.nav__link:hover {
  color: #d87d4a;
}

@media (min-width: 1024px) {
  nav {
    justify-content: space-between;
  }

  .btn__hamburger {
    display: none;
  }

  .nav__links {
    display: flex;
    align-items: center;
    gap: 34px;
  }
}
</style>
