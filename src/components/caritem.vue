<script setup>
const car=defineProps({
    car:{
        type:Object,
        rquired:true,
    }
})


</script>

<template> 
    <div class="car">
        <img :src="car.image" alt="car" />
        <h2>{{ car.brand }}</h2>
        <p>Цена: {{ car.price }}</p>
        <p>Год выпуска: {{ car.year }}</p>
        <p>Объем двигателя: {{ car.volume }}</p>
        <p>Цвет: {{ car.color }}</p>
      </div>


</template>

<style scoped> 

</style>