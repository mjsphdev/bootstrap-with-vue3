<script lang="ts">
import { ref, defineComponent } from "vue";
import CardWork from '@/components/card-work/card-work.vue'
import CardGithub from '@/components/card-github/card-github.vue'
import type { FeaturedWork } from "@/types";
import { featuredWork, githubRepo } from "@/data";

export default defineComponent({
    setup(){
        const listOfWorks = ref<FeaturedWork[]>(featuredWork)
        const githubRepoCards = ref<FeaturedWork[]>(githubRepo)

        return {
            listOfWorks,
            githubRepoCards
        }
    },

    components: {
        CardWork,
        CardGithub
    }
})
</script>
<template>
    <section id="featured-works">
        <div class="container">
            <h1 class="display-5 text-light fw-bold">Featured Work</h1>
            <CardWork :cards="listOfWorks" />
        </div>
    </section>
    <section id="githubrepo">
        <div class="container">
            <h1 class="display-5 text-light fw-bold">Github Repositories</h1>
            <CardGithub :cards="githubRepoCards" />
        </div>
    </section>
</template>