<template>
    <button v-if="variant === 'primary' || variant === 'secondary'" class="btn" :class="{
        primary: variant === 'primary',
        secondary: variant === 'secondary',
    }">{{ text }}</button>
    <a v-else-if="variant === 'tertiary'" class="btn tertiary">
        <span>{{ text }}</span>
        <img src="@/assets/shared/desktop/icon-arrow-right.svg" alt="Arrow right" />
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ButtonAction',
    props: {
        text: {
            type: String,
            required: true
        },
        variant: {
            type: String as () => 'primary' | 'secondary' | 'tertiary',
            required: false,
            default: 'primary'
        }
    }
})
</script>

<style scoped>
.btn {
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
}

.primary,
.secondary {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 30px;
}

.primary {
    background-color: #D87D4A;
    color: #fff;
}

.primary:hover {
    background-color: #FBAF85;
}

.secondary {
    color: #000;
    background-color: #fff;
}

.secondary:hover {
    color: #fff;
    background-color: #000;
}

.tertiary {
    padding: 0;
    background-color: transparent;
    border: none;
}
</style>