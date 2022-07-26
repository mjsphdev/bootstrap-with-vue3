<script lang="ts">
import { defineComponent } from "vue";
import BaseCard from '@/components/base-card/base-card.vue'

export default defineComponent({
    
    props: {
        cards: {
            type: Object,
            default: () => ({})
        }
    },

    components:{
        BaseCard
    }
})
</script>

<template>
    <div class="row">
        <div v-for="(card, index) in cards" :key="index" class="col-md-4">
        <div class="card gitBackground m-4">
            <BaseCard>
                <template #baseCardTitle>
                    {{ card.title }}
                </template>

                <template #baseCardBody>
                    {{ card.text }}
                </template>

                <template #baseCardFooter>
                    <div class="d-flex justify-content-evenly text-light">
                        <p><i class="fa-solid fa-code"></i> Javascript</p>
                        <p><i class="fa-solid fa-star"></i> 0</p>
                        <p><i class="fa-solid fa-code-branch"></i> 0</p>
                    </div>
                </template>
            </BaseCard>
        </div>
        </div>
    </div>
</template>