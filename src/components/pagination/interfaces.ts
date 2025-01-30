export interface IPagination {
  pageIndex: number;
  totalCount: number;
  perPage: number;
  onPageChange: (pageIndex: number) => Promise<void> | void;
}
