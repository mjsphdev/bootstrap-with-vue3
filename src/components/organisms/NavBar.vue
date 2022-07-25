<script lang="ts">
import { defineComponent } from "vue";
import BrandLogo from "../atoms/BrandLogo.vue";
import NavLinks from "../molecules/NavLinks.vue";

export default defineComponent({
    props: {
        links: {
          type: Object,
          default: () => ({}),
        }
    },
    components: { 
        NavLinks, 
        BrandLogo,
    }
})
</script>

<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light navbar-color">
      <div class="container-fluid">
        <BrandLogo class="navbar-brand"/>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <NavLinks :links="links" />
          </div>
        </div>
      </div>
    </nav>
</template>
