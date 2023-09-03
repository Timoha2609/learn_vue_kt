<script setup>
import carItem from "@/components/caritem.vue"
import tablecar from "@/components/tableCar.vue"


const carsArray=[
    {
        brand:"BMW",
        price:"2000000",
        year:1994,
        volume:2.4,
        color:"#480607",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFN0lN7T1WyAETO84V2umxeofkkkl6684bmI01rC_I&s",
    },
    {
        brand:"ferari",
        price:"5000000",
        year:2004,
        volume:3.8,
        color:"#C70039",
        image:"https://www.motortrend.com/uploads/sites/10/2017/11/2004-ferrari-360-modena-berlinetta-f1-coupe-angular-front.png?fit=around%7C875:492.1875",
    },
    {
        brand:"volkswagen",
        price:"1500000",
        year:2008,
        volume:1.5,
        color:"#900C3F",
        image:"https://images.hgmsites.net/lrg/2008-volkswagen-jetta-sedan-4-door-auto-s-pzev-angular-front-exterior-view_100276637_l.jpg",
    },
]



</script>

<template> 
<div class="mashin">
    <section class="cars" v-for="car in carsArray" :key='car'> 
        <carItem :car="car"/>
        </section>    
</div>

<tablecar :car="carsArray"/>





</template>

<style scoped> 
.mashin{
    display:flex;
}

</style>