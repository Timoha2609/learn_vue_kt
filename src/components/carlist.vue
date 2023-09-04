<script setup>
import carItem from "@/components/caritem.vue"

import { defineProps} from "vue";


defineProps({
  cars: {
    type: Array,
    required: true,
  },
});


</script>

<template> 

    <div class="mashin">
        <section class="cars" v-for="car in cars" :key='car'> 
            <carItem :car="car"/>
            </section>    
    </div>






</template>

<style scoped> 
.mashin{
    display:flex;
}

</style>