<template>
  <el-container class="home">
    <el-aside class="el-menu-sidebar bg-sidebar">
      <div class="logo">Snapdom screenshot test under micro application</div>

      <el-menu
        :router="true"
        :default-active="$route.path"
        background-color="#1f2835"
        text-color="#bfcbd9"
        active-text-color="#ffffff"
        class="el-menu-vertical-demo container sidebar-el-menu"
      >
        <template v-for="navItem in routers">
          <el-sub-menu
            v-if="navItem.children && navItem.children.length"
            :index="navItem.path"
            :key="navItem.path"
          >
            <template #title>
              <el-icon color="#fff"><Menu /></el-icon>
              <span>{{ navItem.name }}</span>
            </template>

            <el-menu-item v-for="item in navItem.children" :key="item.path" :index="item.path"
              >{{ item.name }}
            </el-menu-item>
          </el-sub-menu>

          <el-menu-item v-if="!navItem.children" :index="navItem.path" :key="navItem.path">
            <el-icon color="#fff"><Setting /></el-icon>
            <template #title>
              <span>{{ navItem.name }}</span>
            </template>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>

    <el-container>
      <el-main>
        <router-view v-slot="{ Component, route }">
          <component :is="Component" :key="route.fullPath" />
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
let routers = [
  {
    path: '/vite-vue3',
    name: 'micro-app( the base )',
    children: [
      {
        path: '/vite-vue3/demo',
        name: 'Using Snapdom in Sub-applications',
        app: 'vite-vue3'
      }
    ]
  }
];
</script>

<style scoped>
.home {
  height: 100vh;
}

.home .el-main {
  padding: 0;
  background-color: #f7f8fa;
}

.el-aside {
  background-color: #1f2835 !important;
}

.bg-sidebar {
  background: #1f2835;
}

.el-menu {
  border: none;
}
.el-submenu__title {
  background-color: #293143 !important;
}

.el-menu-item:hover {
  color: #fff !important;
  background-color: #495060 !important;
}
.el-menu-item.is-active {
  background-color: #2d8cf0 !important;
}
.el-submenu {
  background-color: #293143;
}
.logo {
  width: 100%;
  color: #fff;
  font-size: 18px;
  padding: 20px 0;
  text-align: center;
  background: #1f2835;
}
</style>
