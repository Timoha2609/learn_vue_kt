<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';            


const props = defineProps({
  car: {
    type: Object,
    required: true,
  },
});

console.log(props)


</script>



<template>

<DataTable v-model:filters="filters" :value="props.car">
<Column field="brand" header="Brand" style="width: 25%" sortable filter>
</Column>
<Column field="price" header="Price" style="width: 25%" sortable filter>
</Column>
<Column field="year" header="Year" style="width: 25%" sortable filter>
</Column>
<Column field="volume" header="Volume" style="width: 25%" sortable filter>
</Column>
</DataTable>

    
</template>

<style scoped>

    
</style>
