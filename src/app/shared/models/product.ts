import { Category } from './../Interfaces/category';
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    productType: string;
    productBrand: string;
    categoryId:number;
    Category:string
}

export class Product implements Product {}