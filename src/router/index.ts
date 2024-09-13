import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../components/Index.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/index',
      component: Index
    },
    // {
    //   path: '/person',
    //   component: Person
    // }
  ]
})
export default router