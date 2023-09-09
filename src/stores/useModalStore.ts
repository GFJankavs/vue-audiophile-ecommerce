import { defineStore } from 'pinia'
// eslint-disable-next-line vue/prefer-import-from-vue
import { extend } from '@vue/shared'

const component = extend({})
type VueComponenet = InstanceType<typeof component>

export interface IModalProps {
  component: null | VueComponenet
  props?: object
  isOpen: boolean
}

export interface IModalState {
  modalState: IModalProps
}

const basicState = { component: null, props: {}, isOpen: false }

export default defineStore('modal-store', {
  state: (): IModalState => ({ modalState: basicState }),
  actions: {
    openModal(payload: IModalProps) {
      const { component, props } = payload

      const body = document.body

      if (body) body.style.overflow = 'hidden'

      this.modalState = { component, props: props || {}, isOpen: true }
    },
    closeModal() {
      this.modalState = basicState

      const body = document.body

      if (body) body.style.overflow = 'auto'
    }
  },
  getters: {
    isModalOpen: (state) => state.modalState.isOpen
  }
})
