<script lang="ts">
import { ref, defineComponent } from 'vue';
import CardBlog from '@/components/card-blog/card-blog.vue';
import type { FeaturedWork } from '@/types';
import { myBlog } from '@/data'

export default defineComponent({
    
    components: { CardBlog },

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
            <CardBlog :cards="blogCards"/>
        </div>
    </section>
</template>