<template>
  <!-- Turn off style isolation: disableScopecss='true' -->
  <!-- micro-app: https://micro-zoe.github.io/doc/zh/start.html -->
  <micro-app
    name="vite-vue3"
    :url="url"
    :data="data"
    iframe
    inline
    keep-alive
    exclude="modulepreload"
    baseroute="/vite-vue3/"
    @datachange="handleDataChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { snapdom } from '@zumer/snapdom';
const route = useRoute();

const data = ref({
  path: route.fullPath,
  type: '发送给子应用的数据'
});

const url = location.origin + '/vite-vue3/';
function handleDataChange(e: CustomEvent): void {
  console.log('from sub application data:', e.detail);
}

// Call the base mount function
window.useSnapdom = async function (el, opts) {
  console.log(snapdom, '----Call the base mount function---');
  return await snapdom(el, opts);
};
</script>

<style scoped></style>
