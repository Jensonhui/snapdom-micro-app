import { createRouter, createMemoryHistory } from 'vue-router'
const router = createRouter({
  history: createMemoryHistory('vite-vue3'),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/demo'
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('../views/DemoView.vue')
    }
  ]
})

export default router
