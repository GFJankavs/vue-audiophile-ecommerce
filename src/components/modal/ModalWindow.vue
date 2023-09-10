<template>
  <Teleport to="body">
    <Transition name="modal-fade" :persisted="false">
      <div
        class="modal-wrapper"
        @click.self="store.closeModal"
        v-if="store.modalState.component"
        aria-modal="true"
        role="dialog"
        tabindex="-1"
      >
        <div class="container modal__container" @click.self="store.closeModal">
          <component :is="store.modalState?.component" v-bind="store.modalState?.props" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-fade-enter-from,
.v.leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: 0.25s ease all;
}

.modal-wrapper {
  position: fixed;
  left: 0;
  bottom: 0;

  z-index: 100;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.4);
}

.modal__container {
  height: 100%;
}
</style>

<script setup lang="ts">
import useModalStore from '@/stores/useModalStore'
import { onMounted, onUnmounted } from 'vue'

const store = useModalStore()

const keyDownListener = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    store.closeModal()
  }
}

const onResize = () => {
  console.log('resize', store.isHamburgerMenu)
  if (store.isHamburgerMenu && window.innerWidth > 1023) {
    store.closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', keyDownListener)
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('keydown', keyDownListener)
  window.removeEventListener('resize', onResize)
})
</script>
