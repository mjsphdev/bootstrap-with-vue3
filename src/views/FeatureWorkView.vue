<script lang="ts">
import { ref, defineComponent } from "vue";
import CardGrid from '@/components/organisms/CardGrid.vue'
import type { FeaturedWork } from "@/types";
import { featuredWork, githubRepo } from "@/data";

export default defineComponent({
    setup(){
        const listOfCards = ref<FeaturedWork[]>(featuredWork)
        const githubRepoCards = ref<FeaturedWork[]>(githubRepo)

        return {
            listOfCards,
            githubRepoCards
        }
    },

    components: {
        CardGrid
    }
})
</script>
<template>
    <section id="featured-works">
        <div class="container">
            <h1 class="display-5 text-light fw-bold">Featured Work</h1>
            <CardGrid :cards="listOfCards" :grid="6"/>
        </div>
    </section>
    <section id="githubrepo">
        <div class="container">
            <h1 class="display-5 text-light fw-bold">Github Repositories</h1>
            <CardGrid :cards="githubRepoCards" :grid="4" />
        </div>
    </section>
</template>