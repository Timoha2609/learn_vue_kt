<script setup>
import { defineProps} from "vue";
import Card from 'primevue/card';
import Chip from 'primevue/chip';



defineProps({
  auto: {
    type: Object,
    required: true,
  },
});



function changeColor(color){
    const crappyColor=['#FF0000','#00FF00',"#480607"];
    if(crappyColor.includes(color)){
        return true
    }
    return false
}

</script>

<template>
  <div class="card"> 
    <card>
        <template #header> 
            <img :src="auto.image" alt="car" class="car-image" />
        </template>
    <template #title> {{ auto.brand }}</template>
    
    <template #content>    
    <p>Цена: {{ auto.price }}</p>
    <p>Год выпуска: {{ auto.year }}</p>
    <p>Объем двигателя: {{ auto.volume }}</p>
    <p :style="`color: ${auto.color}`">Цвет: {{ auto.color }}</p>
    </template>

    <template #footer>

        <Chip v-if="Number(auto.price.slice(0,-3))>10000000" label="Дорогой автомобиль" icon="pi pi-dollar" />
        <Chip v-else-if="Number(auto.year)<=1998" label="Старый" icon="pi pi-history" />
        <Chip v-else label="Скучный" icon="pi pi-volume-down" />
        <Chip v-if="changeColor(auto.color)" label="Так себе" icon="pi pi-thumbs-down-fill" />
        <Chip v-show="auto.volume>2" label="Большой объем" icon="pi pi-sort-amount-up" />

    </template>

</card>
</div>
</template>

<style scoped>
.car-image{
  max-width: 190px;
}



</style>
