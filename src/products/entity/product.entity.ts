import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity({name: "products",synchronize: true})
export class ProductEntity extends  BaseEntity{

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({nullable: false})
    title: string;

    @Column({ type: 'boolean', default: true })
    isActive: boolean;

    @Column({nullable: false})
    description: string;

    @Column({nullable: false})
    price: number

    @Column({nullable: false})
    unit: string;
}
