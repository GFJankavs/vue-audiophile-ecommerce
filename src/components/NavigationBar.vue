<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HamburgerMenu from './HamburgerMenu.vue'
import router from '@/router'

const links = ref<{ name: string; path: string }[]>([])

onMounted(() => {
  links.value = router.getRoutes().map((route) => ({
    name: route.name?.toString() ?? '',
    path: route.path
  }))
})
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
        <button>
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
  background-color: #191919;
  min-width: 100vw;
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
