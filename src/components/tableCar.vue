<script setup>
import {defineProps,ref,watch,computed} from "vue";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dropdown from 'primevue/dropdown';

const props=defineProps({
  cars: {
    type: Array,
    required: true,
  },
});

const cars=props.cars;

const carColumns = [
  {
    field: 'brand',
    header: 'Марка',
  },
  {
    field: 'price',
    header: 'Цена',
  },
  {
    field: 'year',
    header: 'Год выпуска',
  },
  {
    field: 'volume',
    header: 'Объем двигателя',
  },
  {
    field: 'color',
    header: 'Цвет',
  },  
  {
    field: 'criticsscore',
    header: 'Оценка и критика',
  },  
   
]

const criticalArray=computed(()=>{
  return cars.map((car)=> {
    const temp=ref(car.criticalnumber)
    car.criticalnumber=temp.value
    return car
  })  
})

console.log(criticalArray.value)

function changedropdown(value){
  console.log(value)
}



const numberMarks = [
  {
  mark: 0,
  header: "Это Део Нексия"
 },
 {
  mark: 1,
  header: "Очень плохо"
 },
  {
    mark: 2,
    header: "Плохо"
  },
  {
    mark: 3,
    header: "Нормально"
  },
  {
    mark: 4,
    header: "Хорошо"
  },
  {
    mark: 5,
    header: "Отлично"
  },
  {
    mark: 6,
    header: "Это Бентли"
  },
]
</script>



<template>


<DataTable :value="cars">
  <Column v-for="column in carColumns" :key="column.field" :field="column.field" :header="column.header">
    <template #body="{data}">
      <template v-if="column.field ==='criticsscore'">
        <Dropdown @change="changedropdown" v-model="data[column['Оценка и критика']]" :options="numberMarks" optionLabel="header" class="drpodown"/>
      </template>
      <template v-else>{{data[column.field]}} </template>
    </template>
</Column>
</DataTable>


</template>

<style scoped>
.drpodown{
  width:100%;
}
    
</style>
