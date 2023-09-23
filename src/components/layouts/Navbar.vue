<template>
    <div class="card relative z-2">
        <Menubar :model="items">
            <template #item="{ label, item, props, root, hasSubmenu }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                    <span :class="[hasSubmenu && (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right')]" v-bind="props.submenuicon" />
                </a>
            </template>
            <template #end>
              <carAddModul/>
              </template>
        </Menubar>
</div>

</template>

<script setup>
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { onMounted } from 'vue'
import { useAuto } from '@/composable/useAuto'
import Menubar from 'primevue/menubar';
import { ref } from "vue";
import carAddModul from "@/components/carAddModul.vue"

const checkUser= () => {
  return localStorage.getItem('user') !== null;
}



const items = ref([
    {
        label: 'home',
        icon: 'pi pi-eject',
        route: '/'
    },
    {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-user-plus',
                command: () => {googleRegister()
        }
            },
            
        ]
    },
    {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
            {
                label: 'Table',
                icon: 'pi pi-microsoft',
                route: '/table'
            },
            {
                label: 'Cards',
                icon: 'pi pi-server',
                route: '/cards'
            }
        ]
    },
]);
const { autoList, getAutoList} = useAuto()

onMounted(async () => {
  await getAutoList()
})

const googleRegister = () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user
      localStorage.setItem('user', JSON.stringify(user))
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
}
</script>
