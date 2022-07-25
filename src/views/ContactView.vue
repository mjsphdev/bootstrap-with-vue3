<script lang="ts">
import { defineComponent } from "vue";
import ContactSvg from "@/components/atoms/ContactSvg.vue";
import ContactForm from "@/components/molecules/ContactForm.vue";


export default defineComponent({

    components:{ ContactSvg, ContactForm }
})
</script>
<template>
    <section id="contact">
        <div class="container">
            <h1 class="display-5 text-light fw-bold">Contact</h1>
            <div class="row mt-5">
                <div class="col-md-6 mt-5">
                    <ContactSvg />
                </div>
                <div class="col-md-6">
                    <h2 class="text-primary fw-bold text-center">Let's Talk</h2>
                    <form>
                        <ContactForm />
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>