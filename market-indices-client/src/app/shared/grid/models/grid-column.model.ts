export interface GridColumn {
    name: string;
    alias: string
    transform?: (value: any) => any;
    class: string;
}
