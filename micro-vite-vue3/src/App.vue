<template>
  <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route.fullPath" />
  </router-view>
</template>

<script setup lang="ts">
const win = window as any
win.microApp.addDataListener((data: any) => {
  console.log(data, '=======sub application=====')
}, true)
</script>
