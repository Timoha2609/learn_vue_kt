<script setup>

import buttonDelete from '@/components/buttonDelete.vue'
import carlist from '@/components/carlist.vue'
import sidebar from '@/components/SideBar.vue'





</script>

<template>



<div>
    <ul class="nav">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
 </div>

 <sidebar/>
 
 <!-- <buttonDelete/> -->
<carlist/>

</template>

<style scoped> 
.nav{
    display: flex;
    justify-content: space-around;
    align-items: center; 
    width: 300px;
    list-style-type: none;
}
.nav li{
	font-size:14px;
	text-transform:uppercase;
	color:#777;;
	text-decoration:none;
    padding: 10px 20px;
}

</style>
