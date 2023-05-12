<template>
  <a-form
    ref="formRef"
    name="advanced_search"
    class="ant-advanced-search-form"
    :model="formState"
    @finish="onFinish"
  >
    <a-row :gutter="24">
      <template v-for="i in 4" :key="i">
        <a-col v-show="expand || i <= 3" :span="8">
          <a-form-item
            :name="`field-${i}`"
            :label="`field-${i}`"
            :rules="[{ required: true, message: 'input something' }]"
          >
            <a-input
              v-model:value="formState[`field-${i}`]"
              placeholder="placeholder"
            ></a-input>
          </a-form-item>
        </a-col>
      </template>
    </a-row>
    <a-row>
      <a-col :span="24" style="text-align: right">
        <a-button type="primary" html-type="submit">查询</a-button>
        <a-button style="margin: 0 8px" @click="handleRest">重置</a-button>
        <a style="font-size: 12px" @click="expand = !expand">
          <template v-if="expand">收起</template>
          <template v-else>展开</template>
        </a>
      </a-col>
    </a-row>
  </a-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance } from "ant-design-vue";
const expand = ref(false);
const formRef = ref<FormInstance>();
const formState = reactive({});

const onFinish = (values) => {
  console.log("Received values of form: ", values);
  console.log("formState: ", formState);
};

const handleRest = () => {
  formRef.value?.resetFields();
};
</script>

<style lang="scss" scoped></style>
