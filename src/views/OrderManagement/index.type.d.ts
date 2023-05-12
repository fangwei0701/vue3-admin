import { TableColumnType } from "ant-design-vue";

export interface Options {
  label: string;
  value: string;
}

export interface OrderMangementList {
  key: string;
  orderNo: string;
  orderPrice: number;
  orderStatus: string;
  payMethods: string;
  createdDate: string;
}

export interface OrderMangementTable {
  isLoading: boolean;
  selectedRowKeys: string[];
  selectedRow: OrderMangementList[];
  columns: TableColumnType[];
  list: OrderMangementList[];
}
