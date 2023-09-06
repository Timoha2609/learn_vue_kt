import './assets/main.css'

import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import { initializeApp } from "firebase/app";


import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import 'primevue/resources/themes/md-dark-deeppurple/theme.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const firebaseConfig = {
    apiKey: "AIzaSyDW3MbRQ73d0VxybHHosgcqcA3zAPOsP_M",
    authDomain: "vue-project-8a4f4.firebaseapp.com",
    projectId: "vue-project-8a4f4",
    storageBucket: "vue-project-8a4f4.appspot.com",
    messagingSenderId: "31184914440",
    appId: "1:31184914440:web:8f7bd878bdaa543bed69bd",
    measurementId: "G-8BRK2DQG9J"
  };
  
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)
app.use(PrimeVue);
app.use(ToastService);

app.mount('#app')

