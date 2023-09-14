<template>
  <section class="top-nav">
    <input id="menu-toggle" type="checkbox" />
    <label class="menu-button-container" for="menu-toggle">
      <div class="menu-button"></div>
    </label>
  </section>
</template>

<script lang="ts" setup>
import { onBeforeRouteLeave } from 'vue-router'

onBeforeRouteLeave(() => {
  const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement
  if (menuToggle.checked) {
    menuToggle.checked = false
  }
})
</script>

<style scoped>
h2 {
  vertical-align: center;
  text-align: center;
}

html,
body {
  margin: 0;
  height: 100%;
}

* {
  font-family: 'Raleway';
  box-sizing: border-box;
}

.menu {
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: none;
  margin: 89px 0 0;
  padding: 0;
  background-color: #fff;
  border-radius: 0 0 8px 8px;
}

.menu > li {
  display: none;
  justify-content: center;
  margin: 0;
  padding: 0.5em 0;
  width: 100%;
  color: white;
  background-color: #191919;
}

.menu-button-container {
  display: flex;
  height: 100%;
  width: 16px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #fff;
  position: absolute;
  height: 3px;
  width: 16px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu-button::before {
  content: '';
  margin-top: -8px;
}

.menu-button::after {
  content: '';
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}

#menu-toggle:checked ~ .menu {
  display: flex;
}

#menu-toggle ~ .menu li {
  height: 0;
  margin: 0;
  padding: 0;
  border: 0;
  transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
}

#menu-toggle:checked ~ .menu li {
  display: flex;
  height: 2.5em;
  padding: 0.5em;
  opacity: 1;
  transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
}

.menu > li:not(:last-child) {
  border-bottom: 1px solid #444;
}

.body__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
}

@media (min-width: 768px) {
  .menu {
    min-height: 340px;
  }
}
</style>
