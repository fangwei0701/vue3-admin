import { TableColumnType } from "ant-design-vue";

export interface Options {
  label: string;
  value: string;
}

export interface AuctionManagementList {
  key: string;
  code: string;
  name: string;
  price: number;
  nubmer: number;
}

export interface AuctionManagementTable {
  isLoading: boolean;
  columns: TableColumnType[];
  list: AuctionManagementList[];
}
