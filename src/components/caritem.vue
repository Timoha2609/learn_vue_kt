<script setup>
import { defineProps, computed } from "vue";
import Card from 'primevue/card';
import Chip from 'primevue/chip';



const props = defineProps({
  car: {
    type: Object,
    required: true,
  },
});

const carRemake = computed(() => {
  return {
    ...props.car,
    price: props.car.price + "₽",
    kpd:props.car.year/props.car.volume,
  };
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
            <img :src="carRemake.image" alt="car" class="car-image" />
        </template>
    <template #title> {{ carRemake.brand }}</template>
    
    <template #content>    
    <p>Цена: {{ carRemake.price }}</p>
    <p>Год выпуска: {{ carRemake.year }}</p>
    <p>Объем двигателя: {{ carRemake.volume }}</p>
    <p>KPD: {{ carRemake.kpd }}</p>
    <p :style="`color: ${carRemake.color}`">Цвет: {{ carRemake.color }}</p>
    </template>

    <template #footer>

        <Chip v-if="Number(carRemake.price.slice(0,-1))>1000000" label="Дорогой автомобиль" icon="pi pi-dollar" />
        <Chip v-else-if="Number(carRemake.year)<=1960" label="Старый" icon="pi pi-history" />
        <Chip v-else label="Скучный" icon="pi pi-volume-down" />
        <Chip v-if="changeColor(carRemake.color)" label="Так себе" icon="pi pi-thumbs-down-fill" />
        <Chip v-show="carRemake.volume>2" label="Большой объем" icon="pi pi-sort-amount-up" />

    </template>

</card>
</div>
</template>

<style scoped>
.car-image{
  width:200px;
  height: 200px;
}

</style>
