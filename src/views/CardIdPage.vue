<template>     
    <div class="card"> 
        <card>
        <template #title> {{ auto.brand }}</template>
        
        <template #content>    
        <p>Цена: {{ auto.price }}</p>
        <p>Год выпуска: {{ auto.year }}</p>
        <p>Объем двигателя: {{ auto.volume }}</p>
        <p :style="`color: ${auto.color}`">Цвет: {{ auto.color }}</p>
        <img :src="auto.image" alt="car" class="car-image" />
        </template>
        <template #footer> 
            <div class="forbat">
                <button type="button" class="p-link" @click="buy">
                    <i class="pi pi-plus"> Купить</i>
                    </button>
                    <button type="button" class="p-link" @click="increase">
                        <i class="pi pi-check"> Лайк </i>
                        {{ counter }}
                        </button>
                    <button type="button" class="p-link" @click="decrease">
                            <i class="pi pi-times"> Дизлайк </i>
                            {{ counter1 }}
                    </button>
            </div>
            </template>
    </card>
    </div>

  
</template>
     
<script setup>
import { useAuto } from '@/composable/useAuto'
import {onMounted} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import Card from 'primevue/card';

import { ref } from 'vue'
const counter = ref(0)
const counter1 = ref(0)

const increase = () => {
  counter.value++
}

const decrease = () => {
  counter1.value--
}


const router=useRouter()
const{auto,getAuto,loading}=useAuto()

onMounted(async()=>{
    await getAuto(useRoute().params.id)
})

</script>

<style scoped> 
.forbat{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 300px;
    padding: 0;
}

</style>