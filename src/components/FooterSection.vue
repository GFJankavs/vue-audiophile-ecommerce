<template>
    <footer>
        <div class="container">
            <div class="footer__line-container">
                <div class="footer__line" />
            </div>
            <div class="footer__content">
                <img src="@assets/audiophile_logo.svg" alt="Logo" />
                <div class="footer__links">
                    <RouterLink :to="link.path" class="footer__link" v-for="link of links" :key="link.name">{{
                        link.name?.toString().toUpperCase() }}</RouterLink>
                </div>
                <p class="font__body footer__text">
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and
                    sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our
                    demo facility - we’re open 7 days a week.
                </p>
                <span class="font__body footer__rights">
                    Copyright 2021. All Rights Reserved
                </span>
                <div class="footer__socials">
                    <img src="@assets/shared/desktop/icon-facebook.svg" alt="Facebook" class="footer__social">
                    <img src="@assets/shared/desktop/icon-twitter.svg" alt="Twitter" class="footer__social">
                    <img src="@assets/shared/desktop/icon-instagram.svg" alt="Instagram" class="footer__social">
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
    name: 'FooterSection',
    components: {
        RouterLink
    },
    computed: {
        links() {
            const links = router.getRoutes();
            return links.map((link) => ({
                name: link.name,
                path: link.path
            }))
        }
    }
})
</script>

<style scoped>
footer {
    background-color: #101010;
    width: 100%;
    display: grid;
}

.footer__line-container {
    display: flex;
    justify-content: center;
    width: 100%;
}

.footer__line {
    width: 101px;
    height: 4px;
    background: #D87D4A;
}

.footer__content {
    margin-top: 48px;
    margin-bottom: 32px;
    display: grid;
    gap: 48px;
    justify-items: center;
    color: #FFF;
}

.footer__links {
    display: grid;
    justify-items: center;
    gap: 16px;
}

.footer__link {
    all: unset;
    cursor: pointer;
}

.footer__link:hover {
    color: #D87D4A;
}

.footer__text {
    text-align: center;
}

.footer__rights,
.footer__text {
    opacity: 0.5;
}

.footer__socials {
    display: flex;
    align-items: center;
    gap: 16px;
}
</style>