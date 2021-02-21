import { BaseEntity } from "typeorm";
export declare class ProductEntity extends BaseEntity {
    id: number;
    title: string;
    isActive: boolean;
    description: string;
    price: number;
    unit: string;
}
