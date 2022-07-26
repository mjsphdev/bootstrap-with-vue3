<script lang="ts">
import { defineComponent } from "vue";
import BaseCard from '@/components/base-card/base-card.vue';

export default defineComponent({

    props: {
        cards: Object,
        default: () => ({})
    },

    components: { BaseCard }

})
</script>

<template>
    <div class="row">
        <div v-for="(card, index) in cards" :key="index" class="col-md-6">
        <div class="card m-4">
            <BaseCard>
                <template #baseCardTitle>
                    {{ card.title }}
                </template>

                <template #baseCardBody>
                    {{ card.text}}
                </template>

                <template #baseCardFooter>
                    <div>
                        <p class="mx-3 text-info fst-italic">07-25-2022</p>
                    </div>
                    <div class="float-end m-4">
                        <button class="btn btn-outline-primary text-light">Read more</button>
                    </div>
                </template>
            </BaseCard>
        </div>
        </div>
    </div>
</template>