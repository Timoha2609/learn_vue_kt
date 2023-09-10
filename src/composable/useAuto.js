import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '@/firebases'
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { ref } from 'vue'

export const useAuto = () => {
  const auto = ref(null)
  const autoList = ref([])
  const newAuto = ref({})

  const loading = ref({
    auto: false,
    autoList: false,
    newAuto: false,
  })

  async function createAuto() {
    loading.value.newAuto = true;
    newAuto.value={//обратно добавил удали
      name:'Ferrari',
      model:'F300',
      price:"2000000",
      year:1994,
      volume:2.4,
      color:"#480607",
      image:'',
    }
    try {
      await addDoc(collection(db, 'autos'), newAuto.value).then(() => {
        console.log('Cars added')
      })
    } catch (e) {
      console.error('Error: ', e)
    }
  }

  async function getAutoList() {
    loading.value.autoList = true
    try {
      const querySnapshot = await getDocs(collection(db, 'autos'))
      querySnapshot.forEach((doc) => {
        autoList.value.push(doc.data())
      })
    } catch (e) {
      console.error('Error: ', e)
    } finally {
      loading.value.autoList = false
    }
  }

  return {
    createAuto,
    getAutoList,
    auto,
    autoList,
  }
}
