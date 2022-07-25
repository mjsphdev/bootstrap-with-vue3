<script lang="ts">
import { ref, defineComponent } from "vue";
import type { Information } from "@/types";
import { details } from "@/data";

export default defineComponent({

    setup(){
        const information = ref<Information>(details)

        return {
            information
        }
    }
    

})
</script>
<template>
    <section id="about">
        <div class="container">
            <h1 class="display-5 text-light fw-bold">About me</h1>

            <div class="row">
                <div class="col-md-6">
                    <h3 class="text-primary fw-bold mt-5">Hello There!</h3>
                    <p class="fs-5 text-light fw-light">My name is {{information.name}}. I am a {{information.position}} who loves to build modern web applications.</p>
                    <p class="fs-5 text-light fw-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p class="fs-5 text-light fw-light">Now, I focus on back-end stuff because I love to combine logic and efficient code in building a product. If you are interested in working on a project together, don't hesitate to get in touch.</p>

                    <h4 class="text-primary fw-bold mt-5">Experience</h4>
                    <p class="fs-5 text-info fw-light">Computer Programmer I</p>
                    <p class="fs-5 text-light fw-light">March 2020 - May 2021</p>
                    <p class="fs-5 text-light fw-light">Department of Science and Technology - Food and Nutrition Research Institute</p>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-sm-12">
                            <img src="https://i.postimg.cc/9FYsh5n7/138519922-happy-cute-kid-boy-using-laptop-to-do-homework.webp" class="img-fluid float-start mt-5" alt="HELLO">
                        </div>
                        <div class="mt-3">
                            <p class="fs-5 text-light fw-light"><i class="fa-solid fa-location-dot text-primary"></i>  {{ information.location }}</p>
                            <p class="fs-5 text-light fw-light"><i class="fa-solid fa-envelope text-primary"></i>  {{ information.email }}</p>
                            <p class="fs-5 text-light fw-light"><i class="fa-solid fa-phone text-primary"></i>  {{ information.contact }}</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
    </section>
</template>