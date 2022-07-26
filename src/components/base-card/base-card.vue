<script lang="ts">
import { defineComponent } from "vue";
import BaseCardTitle from '@/components/base-card/base-card-title.vue';
import BaseCardBody from '@/components/base-card/base-card-body.vue';
import BaseCardFooter from '@/components/base-card/base-card-footer.vue';

export default defineComponent({
    components: { BaseCardTitle, BaseCardBody, BaseCardFooter},
})
</script>

<template>
        <!-- TITLE  -->
        <BaseCardTitle>
            <template #cardTitle>
                <slot name="baseCardTitle"></slot>
            </template>
        </BaseCardTitle>
        <!-- BODY  -->
        <BaseCardBody>
            <template #cardBody>
                <slot name="baseCardBody"></slot>
            </template>
        </BaseCardBody>
        <!-- FOOTER  -->
        <BaseCardFooter>
            <template #cardFooter>
                <slot name="baseCardFooter"></slot>
            </template>
        </BaseCardFooter>   
</template>