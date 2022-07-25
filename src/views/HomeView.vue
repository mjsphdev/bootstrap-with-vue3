<script lang="ts">
import { ref, defineComponent } from "vue";
import NavBar from "@/components/organisms/NavBar.vue"
import HeroLanding from "@/components/organisms/HeroLanding.vue";
import type { Information, Link } from "@/types"
import { navLinks, details } from "@/data";

export default defineComponent({

    components: { NavBar, HeroLanding },

    setup(){
      const information = ref<Information>(details)
      const listOfLinks = ref<Link[]>(navLinks)

      return {
         listOfLinks,
         information
      }
    },

    
})
</script>
<template>
  <main id="home">
    <NavBar class="fw-semibold text-orange" :links="listOfLinks"/>
    <div class="container pt-5">
      <HeroLanding :info="information"/>
    </div>
  </main>
</template>
