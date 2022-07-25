<script lang="ts">
import { defineComponent } from "vue";
import HeroPage from "../atoms/HeroPage.vue";

export default defineComponent({
    props: {
        info: {
            type: Object,
            default: () => ({})
        }
    },
    components: { HeroPage }
})
</script>

<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-6 mt-5">
                <div class="mt-5">
                    <p class="display-2 text-light">Hi, I'm</p>
                    <p class="display-3 fw-bold text-light">{{ info.name }}</p>
                    <p class="display-3 fw-bold text-info">{{ info.position }}</p>
                    <p class="text-light">Developing modern web applications. Check out my <u class="fw-bold">featured work</u> and <u class="fw-bold">blog</u>.</p> 
                </div>
            </div>
            <div class="col-md-6 mt-5">
                <div class="mt-5">
                  <HeroPage />
                </div>
            </div>
        </div>
    </div>
</template>