<script setup>
import carItem from "@/components/caritem.vue"

import {onMounted} from "vue";
import { useAuto } from '@/composable/useAuto'
const {autoListRemake,getAutoList} = useAuto()

onMounted(async()=>{
  await getAutoList();
})






</script>

<template> 

    <div class="mashin">
        <section class="cars" v-for="auto in autoListRemake" :key='auto'> 
            <carItem :auto="auto"/>
            </section>    
    </div>






</template>

<style scoped> 
.mashin {
    display: flex;
    flex-wrap: wrap; 
    justify-content: flex-start; 
    gap: 20px;
}


.cars {
    padding: 15px; 
  }

</style>