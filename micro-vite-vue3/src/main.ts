import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')

if ((window as any).__MICRO_APP_ENVIRONMENT__) {
  ;(window as any).microApp.addDataListener((data: any) => {
    if (
      data.path &&
      typeof data.path === 'string' &&
      data.path !== router.currentRoute.value.path
    ) {
      const paths = data.path.replace('/vite-vue3', '')
      router.push(paths)
    }
  }, true)
}
