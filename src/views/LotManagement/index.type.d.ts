import { TableColumnType } from "ant-design-vue";

export interface Options {
  label: string;
  value: string;
}

export interface LogMangementList {
  key: string;
  code: string;
  name: string;
  price: number;
  nubmer: number;
}

export interface LogMangementTable {
  isLoading: boolean;
  selectedRowKeys: string[];
  selectedRow: LogMangementList[];
  columns: TableColumnType[];
  list: LogMangementList[];
}
