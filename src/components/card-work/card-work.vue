<script lang="ts">
import { defineComponent } from 'vue';
import BaseCard from '@/components/base-card/base-card.vue';

export default defineComponent({
    
    components: { BaseCard },

    props: {
        cards: {
            type: Object,
            default: () => ({})
        }
    }
})
</script>

<template>
    <div class="row">
        <div v-for="(card, index) in cards" :key="index" class="col-md-6">
        <div class="card m-4">
            <BaseCard>
                <template #baseCardTitle>
                    {{card.title}}
                </template>

                <template #baseCardBody>
                    {{card.text}}
                </template>

                <template #baseCardFooter>
                    <div class="d-flex mx-3 mb-3">
                        <h5 class="px-2"><span class="badge text-bg-primary text-light">Html</span></h5>
                        <h5 class="px-2"><span class="badge text-bg-primary text-light">Vue JS</span></h5>
                        <h5 class="px-2"><span class="badge text-bg-primary text-light">Bootstrap 5</span></h5>
                    </div>
                    <div class="d-flex justify-content-evenly mb-3">
                        <div>
                            <a class="btn text-light fst-italic" href="#">
                               <i class="fa-solid fa-eye"></i> See live    
                            </a>
                        </div>                   
                        <div>
                            <a class="btn text-light fst-italic" href="#">
                               <i class="fa-solid fa-code-merge"></i> View repository
                            </a>
                        </div>  
                    </div>
                </template>
            </BaseCard>
        </div>
        </div>
    </div>
</template>