<template>
  <div class="d-flex justify-center items-center main">
    <div class="login px-lg py-lg">
      <a-form ref="formRef" :model="form" :rules="formRules" autocomplete="off">
        <a-form-item name="username">
          <a-input v-model:value="form.username" />
        </a-form-item>
        <a-form-item name="password">
          <a-input v-model:value="form.password" type="password" />
        </a-form-item>
      </a-form>
      <a-button
        type="primary"
        class="w-100"
        :loading="loading"
        @click="handleLogin()"
      >
        {{ $t("login.LOGIN") }}
      </a-button>
      <a-row class="mt-md">
        <a-col :span="12"><span class="point"></span></a-col>
        <a-col :span="12" class="text-right">
          <span class="point">{{ $t("login.FORGETPASSWORD") }}</span>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LoginForm } from "./index.type";
import { userStore } from "@/store/user";
import userApi from "@/services/user.service";
import type { Rule, FormInstance } from "ant-design-vue/lib/form";
import { useStorage } from "@vueuse/core";
// 路由信息
const router = useRouter();
// 用户信息
const useStore = userStore();
// 用户信息
const USER = useStorage("USER", {});
// 登录加载
const loading = ref<boolean>(false);
// 表单句柄
const formRef = ref<FormInstance>();
// 表单
const form = reactive<LoginForm>({ password: "", username: "" });
// 表单规则
const formRules = reactive<{ [key: string]: Rule[] }>({
  username: [{ required: true, message: "请输入账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});

// 登录
const handleLogin = async () => {
  loading.value = true;
  formRef.value
    .validateFields()
    .then(async () => {
      const { code, data } = await userApi.login({ ...form });
      loading.value = false;

      if (code === "200" && data?.userLogin) {
        USER.value = data;
        useStore.setUser(data);
        router.push("/");
      }
    })
    .catch((err) => {
      loading.value = false;
    });
};
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  width: 100%;
  background: url("@/assets/img/bg.png") no-repeat;
  background-size: cover;
  background-position: center;
}

.login {
  width: 400px;
  border-radius: 4px;
  margin-top: -15%;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 21px 41px 0 rgba(0, 0, 0, 0.2);
}
</style>
