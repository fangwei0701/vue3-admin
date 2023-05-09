<template>
  <a-layout-header class="bg-white px-lg">
    <ul class="d-flex justify-end items-center">
      <li class="point">
        <a-dropdown trigger="click" placement="bottomRight">
          <div class="ant-dropdown-link" @click.prevent>
            <span class="mr-xs">{{ lang === "en" ? "English" : "中文" }}</span>
            <FaIcon :icon="['fas', 'angle-down']"></FaIcon>
          </div>
          <template #overlay>
            <a-menu @click="handleLanguage">
              <template v-if="lang === 'en'">
                <a-menu-item key="1">中文</a-menu-item>
              </template>
              <template v-else>
                <a-menu-item key="2">English</a-menu-item>
              </template>
            </a-menu>
          </template>
        </a-dropdown>
      </li>

      <li class="ml-lg point">
        <a-dropdown trigger="click" placement="bottomRight">
          <div class="ant-dropdown-link">
            <FaIcon :icon="['fas', 'circle-user']"></FaIcon>
            <span class="mx-xs">{{ USER_INFO?.nickname }}</span>
            <FaIcon :icon="['fas', 'angle-down']"></FaIcon>
          </div>
          <template #overlay>
            <a-menu>
              <div class="mt-md mb-sm user-info">
                <div class="name-case">{{ nameCase }}</div>
                <div class="mt-sm nick-name text-grey-7">
                  {{ USER_INFO?.nickname }}
                </div>
              </div>
              <a-menu-item class="text-grey-8 point" @click="handleLogout">
                <FaIcon :icon="['fas', 'arrow-right-from-bracket']"></FaIcon>
                <span class="ml-sm">{{ $t("login.LOGOUT") }}</span>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </li>
    </ul>
  </a-layout-header>
</template>

<script lang="ts" setup>
import { UserOption } from "@/services/user";
import { useStorage } from "@vueuse/core";
import router from "@/router";
// 语言类型
const lang = useStorage("LANG", "cn");
// 用户信息
const USER = useStorage("USER", {});
const USER_INFO = USER.value as UserOption;
// 首字母大写
const nameCase = USER_INFO.nickname?.substring(0, 1)?.toLocaleUpperCase();

// 中英文切换
const handleLanguage = async () => {
  lang.value = lang.value === "en" ? "cn" : "en";
  window.location.reload();
};

// 退出登录
const handleLogout = async () => {
  USER.value = null;
  router.push("/login");
};
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.nick-name {
  font-size: 12px;
}
.name-case {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  border-radius: 50%;
  background-color: rgb(63, 171, 242);
}
</style>
