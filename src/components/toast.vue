<script setup>
import Button from 'primevue/button';
import Toast from 'primevue/toast';

import { useToast } from "primevue/usetoast";
const toast = useToast();

const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Успех', detail: 'Сообщение дошло', life: 5000 });
};

const showInfo = () => {
    toast.add({ severity: 'info', summary: 'Информационный вывод', detail: 'Сообщение дошло', life: 4000 });
};

const showWarn = () => {
    toast.add({ severity: 'warn', summary: 'Предупреждение', detail: 'Сообщение дошло', life: 3000 });
};

const showError = () => {
    toast.add({ severity: 'error', summary: 'Ошибка вывода', detail: 'Сообщение дошло', life: 2000 });
};


</script>

<template> 
    <div class="toast card flex justify-content-center">
        <Toast />
        <div class="flex flex-wrap gap-2">
            <Button label="Успех" severity="success" @click="showSuccess" />
            <Button label="Информационный вывод" severity="info" @click="showInfo" />
            <Button label="Предупреждение" severity="warning" @click="showWarn" />
            <Button label="Ошибка вывода" severity="danger" @click="showError" />
        </div>
    </div>

</template>

<style scoped> 
.toast{
    display: flex;
    justify-content: center;
}

</style>