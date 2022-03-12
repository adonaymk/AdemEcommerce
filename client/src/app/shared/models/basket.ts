import { v4 as uuidv4 } from 'uuid'
export interface Ibasket {
    id: string;
    items: IbasketItem[];
}
export interface IbasketItem {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
    brand: string;
    type: string;
}
export class Basket implements Ibasket {
    id = uuidv4();
    items: IbasketItem[];

}
