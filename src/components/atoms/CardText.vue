<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: String
  }
})

</script>

<template>
    <p class="mx-3 mb-4 text-light">{{ text }}</p>
</template>