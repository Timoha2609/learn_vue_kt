<script setup>
import {defineProps} from 'vue'
const car=defineProps({
    car:{
        type:Object,
        rquired:true,
    }
})

console.log(car)

</script>

<template> 
    <div class="car">
        <img :src="car.car.image" alt="car" />
        <h2>{{car.car.brand }}</h2>
        <p>Цена: {{car.car.price }}</p>
        <p>Год выпуска: {{car.car.year }}</p>
        <p>Объем двигателя: {{car.car.volume }}</p>
        <p>Цвет: {{car.car.color }}</p>
      </div>


</template>

<style scoped> 

</style>