import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory('mis'),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue'),
      children: [
        {
          name: 'vite-vue3/demo',
          path: '/vite-vue3/demo',
          component: () => import('@/components/MicroApp.vue')
        }
      ]
    }
  ]
});

export default router;
