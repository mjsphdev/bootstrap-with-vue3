<script lang="ts">
import { defineComponent } from "vue";
import CardBase from '../molecules/CardBase.vue'

export default defineComponent({
    props: {
        cards: {
            type: Object,
            default: () => ({})
        },
        grid: Number
    },
    components:{
        CardBase
    }
})
</script>

<template>
    <div class="row">
            <CardBase :card="cards" :grid="grid" />
    </div>
</template>