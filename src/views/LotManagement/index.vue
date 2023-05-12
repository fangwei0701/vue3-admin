<template>
  <div class="lot-management">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane v-for="v in tabs" :key="v.value" :tab="v.label"></a-tab-pane>
    </a-tabs>

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
            :title="activeKey === 'noShelf' ? '确定上架吗？' : '确定下架吗？'"
            ok-text="确定"
            cancel-text="取消"
            @confirm="handleShelf(record)"
          >
            <a v-if="activeKey === 'noShelf'">上架</a>
            <a v-if="activeKey === 'onShelf'">下架</a>
          </a-popconfirm>
          <a-popconfirm
            title="确定删除吗？"
            ok-text="确定"
            cancel-text="取消"
            placement="topRight"
            @confirm="handleDelete(record)"
          >
            <a class="ml-md">删除</a>
          </a-popconfirm>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts" setup>
import { LogMangementList, LogMangementTable, Options } from "./index.type";
// tabs列表
const tabs = ref<Options[]>([
  { label: "未上架", value: "noShelf" },
  { label: "已上架", value: "onShelf" },
]);
// 当前激活tab
const activeKey = ref<string>("noShelf");
// 表格数据
const table = reactive<LogMangementTable>({
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
    {
      title: "操作",
      key: "action",
      dataIndex: "action",
      width: 120,
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
  selectedRow: [],
  selectedRowKeys: [],
});

// 勾选数据
const onSelectChange = (keys: string[], rows: LogMangementList[]): void => {
  table.selectedRow = rows;
  table.selectedRowKeys = keys;
};

// 删除
const handleDelete = (row: LogMangementList): void => {
  console.log(row);
};

// 上下架操作
const handleShelf = (row: LogMangementList): void => {
  console.log(row);
};
</script>

<style lang="scss" scoped></style>
