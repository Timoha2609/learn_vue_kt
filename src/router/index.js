import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/table',
      name: 'table',
      component: () => import ('../views/tablePage.vue'),
    },
    {
      path: '/cars',
      name: 'cars',
      component: () => import ('../views/CardPage.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import ('../views/ProfilePage.vue'),
    }
    ,
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import ('../views/NotFoundPage.vue'),
    }
  ]
})

export default router
