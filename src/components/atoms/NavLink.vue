<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // type inference enabled
  props: {
    link: {
      type: Object,
      default: () => ({}),
    }
  },

})
</script>
<template>
  <a class="nav-link text-light mx-3" :href="link.url">{{ link.name }}</a>
</template>

