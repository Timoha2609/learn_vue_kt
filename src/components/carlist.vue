<script setup>
import carItem from "@/components/caritem.vue"
const carsArray=[
    {
        brand:"BMW",
        price:"2000000",
        year:1994,
        volume:2.4,
        color:"#480607",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFN0lN7T1WyAETO84V2umxeofkkkl6684bmI01rC_I&s",
    }
]

console.log(carsArray)

</script>

<template> 

    <section class="cars" v-for="car in carsArray" :key='car'> 

    <carItem :car="car"/>

    </section>


</template>

<style scoped> 

</style>