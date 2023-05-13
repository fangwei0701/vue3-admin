import { TableColumnType } from "ant-design-vue";

export interface Options {
  label: string;
  value: string;
}

export interface FilmReviewList {
  key: string;
  filmName: string;
  uploadDate: string;
  uploadAuthor: string;
  auditName: string;
}

export interface FilmReviewTable {
  isLoading: boolean;
  columns: TableColumnType[];
  list: FilmReviewList[];
}
