<template>
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
import { OrderMangementTable, OrderMangementList } from "./index.type";
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
      width: 120,
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

// 勾选数据
const onSelectChange = (keys: string[], rows: OrderMangementList[]): void => {
  table.selectedRow = rows;
  table.selectedRowKeys = keys;
};

// 删除
const handleDelete = (row: OrderMangementList): void => {
  console.log(row);
};
</script>

<style lang="scss" scoped></style>
