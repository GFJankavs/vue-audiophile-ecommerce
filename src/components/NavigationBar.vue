<script setup lang="ts">
import { ref } from 'vue'
import HamburgerMenu from './HamburgerMenu.vue'
import InfoModalWindow from './modal/cart/InfoModalWindow.vue'
import useModalStore from '@/stores/useModalStore'

const store = useModalStore()

const openInfoModal = () => {
  store.openModal({
    component: InfoModalWindow,
    props: {
      title: 'Info',
      text: 'This is a modal window!'
    },
    isOpen: true
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
        <HamburgerMenu class="hamburger" />
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

  .hamburger {
    display: none;
  }

  .nav__links {
    display: flex;
    align-items: center;
    gap: 34px;
  }
}
</style>
