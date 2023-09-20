<script setup>
import carItem from "@/components/caritem.vue"
import {useRouter} from 'vue-router'
import {onMounted} from "vue";
import { useAuto } from '@/composable/useAuto'


const router=useRouter();

const {autoListRemake,getAutoList} = useAuto()


onMounted(async()=>{
  await getAutoList();
})

function goToCarUrl(id){
  router.push(`/car/${id}`)
}




</script>

<template> 

    <div class="mashin">
        <section class="cars" v-for="auto in autoListRemake" :key='auto'> 
            <carItem :auto="auto" @click="goToCarUrl(auto.id)"/>
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