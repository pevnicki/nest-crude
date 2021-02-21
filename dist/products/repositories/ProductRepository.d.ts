import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { ProductEntity } from "../entity/product.entity";
import { ProductDto } from "../dto/product.model";
export declare class ProductRepository extends Repository<ProductEntity> {
    saveProduct: (productDto: ProductDto) => Promise<ProductDto>;
    getProducts: () => Promise<ProductDto[]>;
    getProductById: (id: number) => Promise<ProductDto>;
    deleteProduct: (id: number) => Promise<DeleteResult>;
    updateProduct: (id: number, productDto: ProductDto) => Promise<UpdateResult>;
}
