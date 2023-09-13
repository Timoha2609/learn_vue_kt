<template>
  <DataTable :value="autoListRemake" :loading="loading.autoList">
    <Column v-for="column in carColumns" :key="column.field" :field="column.field" :header="column.header"/>
  </DataTable>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { useAuto } from '@/composable/useAuto'

const { autoListRemake, getAutoList,loading} = useAuto()

onMounted(()=>{
  getAutoList();

})

const carColumns = [
  { field: 'brand', header: 'Бренд' },
  { field: 'price', header: 'Цена' },
  { field: 'year', header: 'Год производства' },
  { field: 'age', header: 'Возвраст' },
  { field: 'volume', header: 'Объем' },
  { field: 'color', header: 'Цвет' },
  { field: 'saled', header: 'Продано' },
  { field: 'city', header: 'Город' },
  { field: 'carcase', header: 'Кузов' },
  { field: 'gear', header: 'Коробка' },
  { field: 'travel', header: 'Пробег' },
]




</script>

<style scoped>

</style>