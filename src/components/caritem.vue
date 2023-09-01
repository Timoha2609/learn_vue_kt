<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  car: {
    type: Object,
    rquired: true,
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
  <div class="car">
    <img :src="carRemake.image" alt="car" />
    <h2>{{ carRemake.brand }}</h2>
    <p>Цена: {{ carRemake.price }}</p>
    <p>Год выпуска: {{ carRemake.year }}</p>
    <p>Объем двигателя: {{ carRemake.volume }}</p>
    <p>KPD: {{ carRemake.kpd }}</p>
    <p :style="`color: ${carRemake.color}`">Цвет: {{ carRemake.color }}</p>
    <div class="chipes"> 
        <span v-if="Number(carRemake.price.slice(0,-1))>2000000">Дорогой автомобиль</span>
        <span v-else-if="Number(carRemake.year)<=1960">Старый</span>
        <span v-else>Скучный</span>
        <span v-if="changeColor(carRemake.color)">Так себе</span>
        <span v-show="carRemake.volume>2">Большой объем</span>
    </div>

  </div>
</template>

<style scoped>
.chipes{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}
.chipes span{
    margin: 5px;
    padding: 5px;
    border:1px solid black;
    border-radius: 5px;
}
.car {
  border: 1px solid;
  border-radius: 10px;
  width: 200px;
  padding: 20px;
  margin: 10px;
  background-color: #fff;
}
</style>
