<template>
  <a-layout-sider>
    <div class="logo">竞拍系统LOGO</div>
    <a-menu
      v-model:selected-keys="keys.selectedKeys"
      :open-keys="keys.openKeys"
      @openChange="onOpenChange"
      mode="inline"
      theme="dark"
    >
      <template v-for="menu in menus" :key="menu.title">
        <template v-if="menu.children!.length > 0">
          <a-sub-menu :key="menu.path">
            <template #title>
              <FaIcon :icon="['fas', menu.icon]" class="mr-sm"></FaIcon>
              <span>{{ menu.title }}</span>
            </template>
            <div v-for="item in menu.children" :key="item.title">
              <a-menu-item :key="item.path" @click="goToPage(item)">
                <span>{{ item.title }}</span>
              </a-menu-item>
            </div>
          </a-sub-menu>
        </template>
        <template v-else>
          <a-menu-item :key="menu.path" @click="goToPage(menu)">
            <FaIcon :icon="['fas', menu.icon]" class="mr-sm"></FaIcon>
            <span>{{ menu.title }}</span>
          </a-menu-item>
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts" setup>
import Router from "@/router";
import { AsideMenuOption } from "../index.type";
// 路由信息
const route = useRoute();
// 菜单列表
const menus = ref<AsideMenuOption[]>([]);
// 菜单key
const keys = reactive({
  rootKeys: [], // 根菜单key
  openKeys: [], // 当前展开的菜单组
  selectedKeys: [], // 当前激活菜单
});

// 菜单展开收起
const onOpenChange = (openKeys: string[]) => {
  const _openKey = openKeys.find((v) => keys.openKeys.indexOf(v) === -1);
  if (keys.rootKeys.indexOf(_openKey!) === -1) {
    keys.openKeys = openKeys;
  } else {
    keys.openKeys = _openKey ? [_openKey] : [];
  }
};

// 跳转页面
const goToPage = (menu: AsideMenuOption): void => {
  const { path } = menu;
  if (!path) return null;
  Router.push(path);
};

// 创建菜单
const createMenu = (
  name: string,
  path: string,
  title: string,
  icon = ""
): AsideMenuOption => {
  path = path === "/" ? "" : path;
  return {
    path,
    name,
    title,
    icon,
    children: [],
  };
};

const activate = () => {
  const menuOptions: AsideMenuOption[] = [];
  const routes = Router.getRoutes().filter((item) => item.meta.isMain);
  menus.value = routes.map((item) => {
    const { path, name, children, meta } = item;
    const icon = meta.icon ? (meta.icon as string) : "";
    const _menu = createMenu(
      name as string,
      path as string,
      meta.title as string,
      icon
    );
    menuOptions.push(_menu);
    keys.rootKeys.push(path);
    if (!meta.hidden) {
      _menu.children = (children ?? []).map((data) => {
        const subMenu = createMenu(
          data.name as string,
          data.path,
          data.meta?.title as string
        );
        if (data.path === route.path) {
          keys.openKeys = [data.path];
        }
        menuOptions.push(subMenu);
        return subMenu;
      });
    }
    return _menu;
  });
  const index = menuOptions.find((v) => v.path === route.path)?.path || "";
  keys.selectedKeys = [index];
};
activate();

// 路由监听变化，同时更新菜单选中和打开状态
watch(
  () => route.path,
  () => {
    keys.selectedKeys = [route.path];
    keys.rootKeys.forEach((v) => {
      if (route.path.includes(v)) keys.openKeys = [v];
    });
  }
);
</script>

<style lang="scss">
.logo {
  height: 60px;
  color: #fff;
  line-height: 60px;
  padding-left: 20px;
  font-weight: bold;
  font-size: 18px;
}
</style>
