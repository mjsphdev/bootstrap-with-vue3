<script lang="ts">
import { ref, defineComponent } from 'vue';
import TextInput from '@/components/atoms/TextInput.vue';
import TextArea from '@/components/atoms/TextArea.vue';
import type { Inputs } from '@/types';
import { textInputs } from '@/data';

export default defineComponent({

    components: { TextInput, TextArea },

    setup(){
        const inputs = ref<Inputs[]>(textInputs)

        return {
            inputs
        }
    }
})
</script>

<template>
    <form>
        <div v-for="(input, index) in inputs" :key="index">
            <div class="mt-5">
                <TextInput :placeholder="input.placeholder"/>
            </div>
        </div>
        <div class="mt-5">
                <TextArea />
        </div>
        <div class="mt-5">
            <button class="btn btn-primary btn-lg text-light">Send</button>
        </div>     
    </form>
</template>