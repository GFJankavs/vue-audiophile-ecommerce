<template>
  <div class="autocomplete">
    <input
      type="text"
      :placeholder="placeholder"
      @input="onChange"
      v-model="search"
      @keydown.down="(e) => onArrowDown(e)"
      @keydown.up="onArrowUp"
      @keydown.enter="(e) => onEnter(e)"
      :class="inputClass"
      @keydown.escape="onEscape"
    />
    <ul
      id="autocomplete-results"
      v-show="isOpen"
      class="autocomplete-results"
      :style="{
        height: calculateResultsHeight(results.length)
      }"
    >
      <li class="loading" v-if="isLoading">Loading results...</li>
      <li v-if="!isLoading && results.length === 0" class="autocomplete-result">
        No results found
      </li>
      <li
        v-else
        v-for="(result, i) in results"
        :key="i"
        @click="setResult(result)"
        class="autocomplete-result"
        :class="{ 'is-active': i === arrowCounter }"
      >
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { toRefs } from 'vue'

export default {
  name: 'SearchAutocomplete',
  props: {
    value: {
      type: Object as () => { name: string; code: string },
      required: true
    },
    items: {
      type: Array<string>,
      required: false,
      default: () => []
    },
    isAsync: {
      type: Boolean,
      required: false,
      default: false
    },
    inputClass: {
      type: String,
      required: false,
      default: ''
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    }
  },
  setup(props) {
    const { value } = toRefs(props)
    const search = value.value.name

    return { search }
  },
  data() {
    return {
      isOpen: false,
      results: this.items as string[],
      isLoading: false,
      arrowCounter: -1
    }
  },
  watch: {
    items: function (value, oldValue) {
      if (value.length !== oldValue.length) {
        this.results = value
        this.isLoading = false
      }
    }
  },
  emits: ['input:change'],
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  unmounted() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    setResult(result: string) {
      this.search = result
      this.isOpen = false
    },
    filterResults() {
      if (this.search.length > 0) {
        this.results = this.items.filter((item) => {
          return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        })
        return
      }

      this.results = this.items
    },
    onChange() {
      this.$emit('input:change', this.search)

      if (this.isAsync) {
        this.isLoading = true
      } else {
        this.filterResults()
        this.isOpen = true

        if (this.results.length === 1 && this.arrowCounter > 0) {
          this.arrowCounter = 0
        }
      }
    },
    handleClickOutside(event: Event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false
        this.arrowCounter = -1
      }
    },
    onArrowDown(e: Event) {
      const el = e.target as HTMLInputElement
      const isFocused = document.activeElement === el
      if (isFocused && this.arrowCounter < this.results.length - 1) {
        this.filterResults()
        this.isOpen = true
        this.arrowCounter = this.arrowCounter + 1
        let focus: number

        if (this.results.length === 1) {
          focus = 0
        } else {
          focus = this.arrowCounter + 1
        }

        if (focus < this.results.length) {
          const results = document.querySelectorAll(
            '.autocomplete-result'
          ) as NodeListOf<HTMLLIElement>
          results[focus].focus()
          results[focus].scrollIntoView({ block: 'nearest', behavior: 'smooth' })
        }
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1
        let focus = this.arrowCounter - 1
        if (focus >= 0) {
          const results = document.querySelectorAll(
            '.autocomplete-result'
          ) as NodeListOf<HTMLLIElement>
          results[focus].focus()
          results[focus].scrollIntoView({ block: 'nearest', behavior: 'smooth' })
        }
      }
    },
    onEnter(e: KeyboardEvent) {
      e.preventDefault()
      this.search = this.results[this.arrowCounter]
      this.isOpen = false
      this.arrowCounter = -1
    },
    onEscape() {
      this.arrowCounter = -1
      this.isOpen = false
    },
    calculateResultsHeight(resultsLength: number) {
      if (resultsLength < 4) {
        return resultsLength > 1 ? `${resultsLength * 56}px` : '56px'
      }

      return '224px'
    }
  }
}
</script>

<style scoped>
.autocomplete {
  position: relative;
  width: 100%;
}

input {
  background: #fff;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  padding: 18px 24px 19px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
  width: 100%;
  caret-color: #d87d4a;
}

input:focus {
  outline: none;
  border-color: #d87d4a;
}

input::placeholder {
  opacity: 0.4;
}

.autocomplete-results {
  position: absolute;
  z-index: 49;
  width: 100%;
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 40px;
  overflow: auto;
  background-color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
  border-radius: 0 0 8px 8px;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 18px 24px 19px;
  cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #d87d4a;
  color: white;
}
</style>
