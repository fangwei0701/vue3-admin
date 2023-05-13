<template>
  <a-form ref="formRef" :model="form">
    <a-row :gutter="24">
      <a-col :span="6">
        <a-form-item name="orderNo" label="订单编号">
          <a-input
            v-model:value="form.orderNo"
            :allow-clear="true"
            placeholder="请输入"
          ></a-input>
        </a-form-item>
      </a-col>
      <a-col :span="6">
        <a-form-item name="orderStatus" label="订单状态">
          <a-select
            v-model:value="form.orderStatus"
            class="w-100"
            :allow-clear="true"
            :options="orderStatusOptions"
            placeholder="请选择"
          ></a-select>
        </a-form-item>
      </a-col>
      <a-col :span="6">
        <a-form-item name="payMethed" label="支付方式">
          <a-select
            v-model:value="form.payMethed"
            class="w-100"
            :allow-clear="true"
            :options="payMethedOptions"
            placeholder="请选择"
          ></a-select>
        </a-form-item>
      </a-col>
      <a-col :span="6" style="text-align: right">
        <a-button type="primary" class="mr-sm" @click="search(1)">
          查询
        </a-button>
        <a-button @click="handleRestForm">重置</a-button>
      </a-col>
    </a-row>
  </a-form>

  <a-table
    :columns="table.columns"
    :data-source="table.list"
    :loading="table.isLoading"
    :row-selection="{
      selectedRowKeys: table.selectedRowKeys,
      onChange: onSelectChange,
    }"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'action'">
        <a-popconfirm
          title="确定关闭吗？"
          ok-text="确定"
          cancel-text="取消"
          placement="topRight"
          @confirm="handleColseOrder(record)"
        >
          <a>关闭</a>
        </a-popconfirm>
        <a-popconfirm
          title="确定删除吗？"
          ok-text="确定"
          cancel-text="取消"
          placement="topRight"
          @confirm="handleDeleteOrder(record)"
        >
          <a class="mx-sm">删除</a>
        </a-popconfirm>
        <a @click="handleOrderDetail(record)">详情</a>
      </template>
    </template>
  </a-table>

  <a-drawer
    :visible="drawerVisible"
    :width="640"
    title="订单详情"
    placement="right"
    @close="handleClose"
  >
    <p>Some contents...</p>
  </a-drawer>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { SelectProps } from "ant-design-vue";
import type { FormInstance } from "ant-design-vue/lib/form";
import {
  OrderForm,
  OrderMangementList,
  OrderMangementTable,
} from "./index.type";
// 表单句柄
const formRef = ref<FormInstance>();
// 表单
const form = reactive<OrderForm>({
  orderNo: "",
  payMethed: "",
  orderStatus: "",
});
// 订单状态
const orderStatusOptions = ref<SelectProps["options"]>([
  { value: "1", label: "待支付" },
  { value: "2", label: "已支付" },
  { value: "3", label: "交易成功" },
  { value: "4", label: "手动关闭" },
  { value: "5", label: "超时关闭" },
]);
// 支付方式
const payMethedOptions = ref<SelectProps["options"]>([
  { value: "1", label: "未支付" },
  { value: "2", label: "微信" },
  { value: "3", label: "支付宝" },
  { value: "4", label: "银行卡" },
]);
// 详情抽屉
const drawerVisible = ref<boolean>(false);
// 表格数据
const table = reactive<OrderMangementTable>({
  columns: [
    {
      title: "订单号",
      key: "orderNo",
      dataIndex: "orderNo",
      ellipsis: true,
    },
    {
      title: "订单总价",
      key: "orderPrice",
      dataIndex: "orderPrice",
    },
    {
      title: "订单状态",
      key: "orderStatus",
      dataIndex: "orderStatus",
    },
    {
      title: "支付方式",
      key: "payMethods",
      dataIndex: "payMethods",
    },
    {
      title: "创建时间",
      key: "createdDate",
      dataIndex: "createdDate",
    },
    {
      title: "操作",
      key: "action",
      dataIndex: "action",
      width: 140,
    },
  ],
  list: [
    {
      key: "1",
      orderNo: "233321222222",
      orderPrice: 212323,
      orderStatus: "待支付",
      payMethods: "未支付",
      createdDate: "2022-12-12 12:12:12",
    },
    {
      key: "2",
      orderNo: "sdsdf3232222",
      orderPrice: 2323,
      orderStatus: "已支付",
      payMethods: "微信",
      createdDate: "2022-01-01 12:12:12",
    },
    {
      key: "3",
      orderNo: "sdsdf3232222",
      orderPrice: 2323,
      orderStatus: "已支付",
      payMethods: "微信",
      createdDate: "2022-01-01 12:12:12",
    },
    {
      key: "4",
      orderNo: "sdsdf3232222",
      orderPrice: 2323,
      orderStatus: "已支付",
      payMethods: "微信",
      createdDate: "2022-01-01 12:12:12",
    },
  ],
  isLoading: false,
  selectedRow: [],
  selectedRowKeys: [],
});

const search = (pageNow?: number) => {
  table.isLoading = true;
  setTimeout(() => {
    table.isLoading = false;
  }, 1000);
};

// 勾选数据
const onSelectChange = (keys: string[], rows: OrderMangementList[]): void => {
  table.selectedRow = rows;
  table.selectedRowKeys = keys;
};

// 删除订单
const handleDeleteOrder = (row: OrderMangementList): void => {
  console.log(row);
};

// 关闭订单
const handleColseOrder = (row: OrderMangementList): void => {
  console.log(row);
};

// 订单详情
const handleOrderDetail = (row: OrderMangementList): void => {
  console.log(row);
  drawerVisible.value = true;
};

// 重置
const handleRestForm = (): void => {
  formRef.value?.resetFields();
};

// 关闭
const handleClose = (): void => {
  drawerVisible.value = false;
};
</script>
