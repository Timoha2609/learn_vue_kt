<template> 
    <Button label="Show" icon="pi pi-external-link" @click="toogleVisible" true />

    <Dialog v-model:visible="visible" modal header="Выставить Автомобиль" :style="{ width: '50vw' }">
        <template #default>
            <div class="p-fluid">
              <div class="p-field">
                <label for="brand">Бренд</label>
                <Dropdown id="brand" v-model="newAuto.brand" editable :options="brandLabel" option-label="brand" option-value="brand" placeholder="Бренд" />
              </div>
              <div class="p-field">
                <label for="price">Цена</label>
                <InputNumber id="price" v-model="newAuto.price" mode="currency" currency="KZT" locale="ru-ru" />
              </div>
              <div class="p-field">
                <label for="year">Год</label>
                <Calendar id="year" v-model="newAuto.year" view="year" dateFormat="yy" />
              </div>
              <div class="p-field">
                <label for="volume">Объем</label>
                <InputNumber id="volume" v-model="newAuto.volume" inputId="integeronly" />
              </div>
              <div class="p-field">
                <label for="color">Цвет</label>
                <ColorPicker id="color" v-model="newAuto.color" />
              </div>
              <div class="p-field">
                <label for="city">Город</label>
                <Dropdown id="city" v-model="newAuto.city" editable :options="kazakhcity" option-label="city" option-value="city" placeholder="Город" />
              </div>
              <div class="p-field">
                <label for="carcase">Кузов</label>
                <Dropdown id="carcase" v-model="newAuto.carcase" editable :options="carcasec" option-label="carcase" option-value="carcase" placeholder="Кузов" />
              </div>
              <div class="p-field">
                <label for="gear">Коробка</label>
                <div class="flex flex-wrap gap-3">
                    <div class="flex align-items-center">
                        <RadioButton id="gear" v-model="newAuto.gear" inputId="tip1" name="Коробка" value="Механическая" />
                        <label for="tip1" class="ml-2">Механическая</label>
                    </div>
                    <div class="flex align-items-center">
                        <RadioButton id="gear" v-model="newAuto.gear" inputId="tip2" name="Коробка" value="Автоматическая" />
                        <label for="tip2" class="ml-2">Автоматическая</label>
                    </div>
                    <div class="flex align-items-center">
                        <RadioButton id="gear" v-model="newAuto.gear" inputId="tip3" name="Коробка" value="Роботизированная" />
                        <label for="tip3" class="ml-2">Роботизированная</label>
                    </div>
                    <div class="flex align-items-center">
                        <RadioButton id="gear" v-model="newAuto.gear" inputId="tip4" name="Коробка" value="Вариативная" />
                        <label for="tip4" class="ml-2">Вариативная</label>
                    </div>
                </div>
              </div>
              <div class="p-field">
                <label for="travel">Пробег</label>
                <InputText id="travel" v-model.number="newAuto.travel" />
                <Slider id="travel" v-model="newAuto.travel" :min="0" :max="500000" :step="1000"/>
              </div>
            </div>
          </template>
     <template #footer> 
        <Button label="Сбросить" icon="pi pi-times" @click="clearAuto" text> </Button>
        <Button label="Добавить" icon="pi pi-check" @click="addAuto" autofocus> </Button>
    </template>
    </Dialog>
</template>

<script setup>
import { ref } from "vue";
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import ColorPicker from 'primevue/colorpicker';
import RadioButton from 'primevue/radiobutton';
import Slider from 'primevue/slider';
import { useAuto } from '@/composable/useAuto';

const{newAuto,createAuto,loading,clear}=useAuto()

const visible = ref(false);

const toogleVisible=()=>{
    visible.value=!visible.value
}




async function addAuto(){
  await createAuto()
  toogleVisible()
}

function clearAuto(){
  clear()
  toogleVisible()
}


const brandLabel = [
  { brand: 'BMW' },
  { brand: 'Audi' },
  { brand: 'Mercedes' },
  { brand: 'Volkswagen' },
  { brand: 'Volvo' },
  { brand: 'Toyota' },
  { brand: 'Nissan' },
  { brand: 'Mazda' },
  { brand: 'Honda' },
  { brand: 'Hyundai' },
  { brand: 'Kia' },
  { brand: 'Lexus' },
  { brand: 'Ford' },
  { brand: 'Chevrolet' },
  { brand: 'Skoda' },
  { brand: 'Renault' },
  { brand: 'Peugeot' },
]

const kazakhcity=[
  { city: 'Алматы' },
  { city: 'Астана' },
  { city: 'Шымкент' },
  { city: 'Актау' },
  { city: 'Талдыкорган' },
  { city: 'Атырау' },
]

const carcasec=[
  { carcase: 'Седан' },
  { carcase: 'Купе' },
  { carcase: 'Хэтчбек' },
  { carcase: 'Лифтбек' },
  { carcase: 'Фастбэк' },
  { carcase: 'Универсал' },
  { carcase: 'Кроссовер' },
  { carcase: 'Внедорожник' },
]
</script>


<style scoped> 

</style>