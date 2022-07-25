<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        badgeTags: {
            type: Object,
            default: () => ({})
        }
    }
})
</script>
<template>
        <div class="d-flex mx-3 mb-3">
            <h5><span class="badge text-bg-primary text-light">Primary</span></h5>
        </div>
</template>