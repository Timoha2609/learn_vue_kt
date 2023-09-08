// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDW3MbRQ73d0VxybHHosgcqcA3zAPOsP_M",
  authDomain: "vue-project-8a4f4.firebaseapp.com",
  projectId: "vue-project-8a4f4",
  storageBucket: "vue-project-8a4f4.appspot.com",
  messagingSenderId: "31184914440",
  appId: "1:31184914440:web:8f7bd878bdaa543bed69bd",
  measurementId: "G-8BRK2DQG9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }