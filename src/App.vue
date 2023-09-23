<script setup>

import Snizutabl from '@/components/footer.vue'
import carlist from '@/components/carlist.vue'
import sidebar from '@/components/SideBar.vue'
import tablecar from "@/components/tableCar.vue"
import toast from "@/components/toast.vue"
import navbar from "@/components/layouts/Navbar.vue"
import carAddModul from "@/components/carAddModul.vue"
import {RouterView} from 'vue-router'


</script>

<template>
<navbar/>
<router-view/>

<Snizutabl/>

</template>

<style scoped> 


</style>
