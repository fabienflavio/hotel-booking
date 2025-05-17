export interface chambreType {
    data : {
        name: string;
        price: number;
        class: string;
        image: string;
        id: number;
    }[]
    totalItems ?:number
} 
export type ChambreTypeData = {
        name: string;
        price: number;
        class: string;
        image: string;
        id: number;
}