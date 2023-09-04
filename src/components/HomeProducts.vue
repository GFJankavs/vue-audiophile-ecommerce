<template>
    <div class="container">
        <div class="product__grid">
            <section class="product__first">
                <div class="first__content">
                    <img src="@assets/home/mobile/image-speaker-zx9.png" alt="" class="first__img" />
                    <div class="first__text-content">
                        <h3 class="first__title">ZX9 SPEAKER</h3>
                        <p class="font__body first__text">Upgrade to premium speakers that are phenomenally built to deliver
                            truly
                            remarkable sound.</p>
                        <ButtonAction text="See Product" variant="secondary" />
                    </div>
                </div>
            </section>
            <section class="product__second">
                <h4 class="font__h4">ZX7 SPEAKER</h4>
                <ButtonAction text="See Product" variant="secondary" />
            </section>
            <section class="product__third">
                <img src="@assets/home/mobile/image-earphones-yx1.jpg" alt="Earphones" class="third__img" />
                <div class="third__content">
                    <h4 class="font__h4">YX1 EARPHONES</h4>
                    <ButtonAction text="See Product" variant="secondary" />
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonAction from './ButtonAction.vue';

export default defineComponent({
    name: 'HomeProducts',
    components: {
        ButtonAction
    }
})
</script>

<style scoped>
.product__grid {
    display: grid;
    gap: 24px;
    padding: 120px 0;
}

.product__first {
    background: #D87D4A;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    background-image: url('@assets/home/desktop/pattern-circles.svg');
    background-size: cover;
    background-position: 50% -140px;
    background-repeat: no-repeat;
}

.first__content,
.first__text-content {
    display: grid;
    justify-items: center;
}

.first__content {
    gap: 32px;
    padding: 55px 24px;
}

.first__img {
    width: 172px;
}

.first__text-content {
    gap: 24px;
}

.first__title {
    width: 100%;
    color: #FFF;
    text-align: center;
    font-family: Manrope;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    /* 111.111% */
    letter-spacing: 1.286px;
    text-transform: uppercase;
    white-space: pre-wrap;
    word-spacing: 9999999px;
}

.first__text {
    color: #FFF;
    text-align: center;
}

.product__second {
    background-image: url('@assets/home/mobile/image-speaker-zx7.jpg');
    background-color: lightgray;
    background-position: 0px 0px;
    background-size: cover;
    background-repeat: no-repeat;
    display: grid;
    gap: 32px;
    padding: 148px 0 100px 24px;
    border-radius: 8px;
}

.product__third {
    display: grid;
    gap: 24px;
}

.third__img {
    width: 100%;
    overflow: hidden;
    border-radius: 8px;
}

.third__content {
    border-radius: 8px;
    background-color: #F1F1F1;
    display: grid;
    gap: 32px;
    padding: 41px 0 41px 24px;
}

.third__title {}
</style>