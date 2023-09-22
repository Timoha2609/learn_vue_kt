<template>     
    <div class="auto-card" v-if="auto"> 
      <Card>
        <template #title>{{ auto.brand }}</template>
        
        <template #content>    
          <p>Цена: {{ auto.price }} тенге</p>
          <p>Год выпуска: {{ auto.year }}</p>
          <p>Пробег: {{ auto.travel }} км</p>
          <p>Объем двигателя: {{ auto.volume }}</p>
          <p>Кузов: {{ auto.carcase }}</p>
          <p :style="`color: #${auto.color}`">Цвет: {{ auto.color }}</p>
          <img :src="auto.image" alt="car" class="car-image" />
        </template>
  
        <template #footer> 
          <div class="button-container">
            <button type="button" class="buy-button" @click="buy">
              <i class="pi pi-plus"></i> Купить
            </button>
            <button type="button" class="like-button" @click="increase">
              <i class="pi pi-check"></i> Лайк {{ counter }}
            </button>
            <button type="button" class="dislike-button" @click="decrease">
              <i class="pi pi-times"></i> Дизлайк {{ counter1 }}
            </button>
          </div>
        </template>
      </Card>
    </div>
  </template>
       
  <script setup>
  import { useAuto } from '@/composable/useAuto'
  import { onMounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import Card from 'primevue/card'
  import { ref } from 'vue'
  
  const counter = ref(0)
  const counter1 = ref(0)
  
  const increase = () => {
    counter.value++
  }
  
  const decrease = () => {
    counter1.value--
  }
  
  
  const router = useRouter()
  const { auto, getAuto, loading } = useAuto()
  
  onMounted(async () => {
    await getAuto(useRoute().params.id)
  })
  </script>
  
  <style scoped>
  .auto-card {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .button-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 300px;
    padding: 0;
    gap: 10px;
  }
  
  .buy-button,.like-button,.dislike-button {
    background-color: grey;
    width:200px;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .buy-button:hover,.like-button:hover, .dislike-button:hover {
    background-color: #0056b3;
  }
  
  .car-image {
    max-width: 100%;
    height: auto;
  }
  </style>