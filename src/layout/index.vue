<template>
  <div class="app-layout">
    <a-layout style="min-height: 100vh">
      <Aside></Aside>
      <a-layout>
        <Header></Header>
        <a-layout-content style="margin: 0 24px">
          <div class="page-title">{{ title }}</div>
          <div class="px-lg py-md bg-white content">
            <router-view></router-view>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import Aside from "@/layout/aside/index.vue";
import Header from "@/layout/header/index.vue";
// 路由信息
const route = useRoute();
// 页面title
const title = ref<string>(route.meta.title as string);

watch(
  () => route.path,
  () => {
    title.value = route.meta.title as string;
  }
);
</script>

<style lang="scss" scoped>
.page-title {
  padding: 12px 0px;
  font-size: 20px;
  font-weight: bold;
}
.content {
  min-height: calc(100vh - 144px);
}
</style>
