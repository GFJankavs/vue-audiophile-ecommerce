<template>
    <div class="radio" @click="onRadioSelect">
        <label class="radio__container" :for="name">{{ text }}
            <input type="radio" :checked="checked" :name="name" :id="name">
            <span class="checkmark"></span>
        </label>
    </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';

const props = defineProps<{ text: string, checked: boolean, name: string }>();

const { text, checked, name } = toRefs(props);

const emit = defineEmits(['radio:selected']);

const onRadioSelect = () => {
    emit('radio:selected', name.value);
}
</script>

<style scoped>
.radio {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    border-color: #cfcfcf;
    padding: 16px 18px;
    cursor: pointer;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
}

.radio:hover {
    border-color: #D87D4A;
}

.radio:has(input[type="radio"]:focus) {
    border-color: #D87D4A;
}

/* The container */
.radio__container {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 36px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default radio button */
.radio__container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    height: 20px;
    width: 20px;
    border: 1px solid #cfcfcf;
    background-color: transparent;
    border-radius: 50%;
}

.radio__container input:checked~.checkmark {
    background-color: transparent;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.radio__container input:checked~.checkmark:after {
    display: block;
}

.radio__container .checkmark:after {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #D87D4A;
}
</style>