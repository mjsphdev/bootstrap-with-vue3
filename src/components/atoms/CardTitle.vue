<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        tag: String,
        content: String
    }
});
</script>

<template>
  <component :is="tag" class="diplay-6 mt-3 mx-3 mb-2 text-light">{{ content }}</component>
</template>