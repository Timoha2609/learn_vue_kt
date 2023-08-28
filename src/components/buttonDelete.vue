<script setup>
import {ref} from 'vue'
const counter=ref(0);


const  increase=()=>{
    counter.value++//Обращение именно к value, подменяем значение на то что
}
const  decrease=()=>{
    counter.value--
}


</script>

<template> 
    <div class="buttons"> 
        {{counter}}
        <button class="increase" @click="increase"> Увеличить </button>
        <button class="decrease" @click="decrease"> Уменьшить </button>
     </div>
</template>

<style scoped> 
.buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .increase {
    background-color: green;
  }
  
  .decrease {
    background-color: red;
  }

</style>