<script lang="ts">
import { defineComponent } from "vue";
import NavLink from "@/components/atoms/NavLink.vue"

export default defineComponent({
    props: {
        links: {
            type: Object,
            default: () => ({}),
        }
    },
    components: { NavLink }
})
</script>

<template>
        <div 
            v-for="(link, index) in links" :key="link.name + index"
        >
            <NavLink :link="link" />
        </div>
</template>