export interface Indice {
    id: string;
    name: string;
    lastRate: number;
    change: number;
    turnOver: number;
    chartData: Array<ChartItem>;
    indexComposition: Array<IndexComposition>
}


export interface ChartItem {
    date: string;
    rate: number;
}

export interface IndexComposition {
    name: string;
    id: string;
    weight: number;
    marketCap: number;
    turnOver: number;
    change: number;
    rate: number;
}
