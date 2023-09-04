<script setup>
import Sidebar from 'primevue/sidebar'
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import { ref } from "vue";

const visible = ref(false);


</script>

<template> 
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible">
            <h2>Sidebar</h2>
            <InputText type="text" v-model="value" />
            <Textarea v-model="value" rows="5" cols="30" />    
        </Sidebar>
        <Button icon="pi pi-arrow-right" @click="visible = true" />
    </div>   
</template>

<style scoped> 


</style>