<template>
    <div class="wrapper">
        <img src="@assets/home/mobile/image-header.jpg" alt="Hero Background" class="hero__img" />
        <div class="container">
            <div class="hero__flex">
                <div class="hero__content">
                    <div class="hero__content-top">
                        <div class="hero__title-container">
                            <h3 class="hero__title font__overline">New product</h3>
                            <h1 class="hero__subtitle font__h1">XX99 Mark II Headphones</h1>
                        </div>
                        <p class="hero__text font__body">
                            Experience natural, lifelike audio and exceptional build quality made for the
                            passionate music enthusiast.
                        </p>
                    </div>
                    <ButtonAction text="See Product" type="primary" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonAction from './ButtonAction.vue';


export default defineComponent({
    name: 'HeroSection',
    components: {
        ButtonAction
    }
})
</script>

<style scoped>
.wrapper {
    position: relative;
    background-color: #191919;
    z-index: 1;
    min-height: 630px;
}

.hero__img {
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 450px;
}

.hero__flex {
    position: relative;
    margin: 0 auto;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 128px 0;
    color: #fff;
    white-space: break-spaces;
}

.hero__content {
    display: grid;
    justify-items: center;
    gap: 28px;
    text-align: center;
}

.hero__content-top {
    display: grid;
    gap: 24px;
}

.hero__title-container {
    display: grid;
    gap: 16px;
}

.hero__title {
    opacity: 0.4964;
    width: 100%;
    white-space: wrap;
}

.hero__text {
    opacity: 0.75;
}

@media (max-width: 400px) {
    h1 {
        font-size: 48px;
    }
}
</style>
