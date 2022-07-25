<script lang="ts">
import { defineComponent, computed } from "vue";
import CardTitle from '../atoms/CardTitle.vue'
import CardText from "../atoms/CardText.vue";

export default defineComponent({

    props: {
        card: {
            type: Object,
            default: () => ({}),
        },
        grid: Number
    },
    components: {
        CardTitle,
        CardText
    },

    setup(props){
        const customGrid = computed(() => {
            return `col-md-${props.grid}`;
        })

        return {
            customGrid
        }
    }
})

</script>
<template>
    <div v-for="(cardcontent, index) in card" :key="index"  :class="customGrid">
        <div class="card m-4" :class="[cardcontent.id == 'gr' ? 'gitBackground' : '']">
            <CardTitle tag="h4" :content="cardcontent.title"/>
            <CardText :text="cardcontent.text"/>
            <!-- Featured-Work -->
            <div v-if="cardcontent.id == 'fw'">
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
            </div>
            

            <!-- Github Repo -->
            <div v-if="cardcontent.id == 'gr'" class="d-flex justify-content-evenly text-light">
                <p><i class="fa-solid fa-code"></i> Javascript</p>
                <p><i class="fa-solid fa-star"></i> 0</p>
                <p><i class="fa-solid fa-code-branch"></i> 0</p>
            </div>

            <!-- My Blog -->
            <div v-if="cardcontent.id == 'bl'">
                <p class="mx-3 text-info fst-italic">07-25-2022</p>
            </div>
            <div v-if="cardcontent.id == 'bl'" class="ms-auto m-4">
                <button class="btn btn-outline-primary text-light">Read more</button>
            </div>
        </div>
    </div>
   
</template>