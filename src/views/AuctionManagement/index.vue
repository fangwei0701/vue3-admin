<template>
  <div class="auction-management">
    <a-tabs v-model:activeKey="activeKey" @change="changeTab">
      <a-tab-pane v-for="v in tabs" :key="v.value" :tab="v.label"></a-tab-pane>
    </a-tabs>
  </div>
  <a-table
    :columns="table.columns"
    :data-source="table.list"
    :loading="table.isLoading"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'action'">
        <a-popconfirm
          title="确定删除吗？"
          ok-text="确定"
          cancel-text="取消"
          placement="topRight"
          @confirm="handleDelete(record)"
        >
          <a>删除</a>
        </a-popconfirm>
      </template>
    </template>
  </a-table>
</template>

<script lang="ts" setup>
import {
  AuctionManagementTable,
  AuctionManagementList,
  Options,
} from "./index.type";

// tabs列表
const tabs = ref<Options[]>([
  { label: "未开始", value: "noStart" },
  { label: "竞拍中", value: "inProgress" },
  { label: "已完成", value: "completed" },
]);
// 当前激活tab
const activeKey = ref<string>("noStart");
// 表格数据
const table = reactive<AuctionManagementTable>({
  columns: [
    {
      title: "商品编号",
      key: "code",
      dataIndex: "code",
      ellipsis: true,
    },
    {
      title: "商品名称",
      key: "name",
      dataIndex: "name",
      ellipsis: true,
    },
    {
      title: "商品价格",
      key: "price",
      dataIndex: "price",
    },
    {
      title: "商品库存",
      key: "nubmer",
      dataIndex: "nubmer",
    },
  ],
  list: [
    {
      key: "1",
      code: "233321222222",
      name: "测试商品一",
      price: 23,
      nubmer: 2232,
    },
    {
      key: "2",
      code: "abs2333222",
      name: "测试商品二",
      price: 545,
      nubmer: 12,
    },
    {
      key: "3",
      code: "3sdsfsdf22333",
      name: "测试商品三",
      price: 7654,
      nubmer: 1,
    },
  ],
  isLoading: false,
});

// 切换tab
const changeTab = (): void => {
  table.isLoading = false;
};

// 删除
const handleDelete = (row: AuctionManagementList): void => {
  console.log(row);
};
</script>

<style lang="scss" scoped></style>
