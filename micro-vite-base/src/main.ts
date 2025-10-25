import { createApp } from 'vue';
import { createPinia } from 'pinia';
import microApp from '@micro-zoe/micro-app';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

microApp.start({
  'disable-memory-router': true // 关闭虚拟路由
});
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(ElementPlus);
app.use(createPinia());
app.use(router);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount('#app');
