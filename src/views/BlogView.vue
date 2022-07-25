<script lang="ts">
import { ref, defineComponent } from 'vue';
import CardGrid from '@/components/organisms/CardGrid.vue';
import type { FeaturedWork } from '@/types';
import { myBlog } from '@/data'

export default defineComponent({
    
    components: { CardGrid },

    setup(){
        const blogCards = ref<FeaturedWork[]>(myBlog)

        return {
            blogCards
        }
    }
})
</script>

<template>
    <section id="blog">
        <div class="container">
            <h1 class="display-5 text-light fw-bold">My Blog</h1>
            <CardGrid :cards="blogCards" :grid="6" />
        </div>
    </section>
</template>