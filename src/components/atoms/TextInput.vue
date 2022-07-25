<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        placeholder: String
    }
})
</script>

<template>
    <input type="text" class="form-control text-light" :placeholder="placeholder">
</template>