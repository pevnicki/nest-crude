import { ProductDto } from "../dto/product.model";
import { ProductRepository } from "../repositories/ProductRepository";
import { DeleteResult, UpdateResult } from "typeorm";
export declare class ProductsService {
    private readonly productRepo;
    constructor(productRepo: ProductRepository);
    insertProduct: (product: ProductDto) => Promise<ProductDto>;
    getAllProducts: () => Promise<ProductDto[]>;
    getProductById: (id: number) => Promise<ProductDto>;
    deleteProduct: (id: number) => Promise<DeleteResult>;
    updateProduct: (id: number, productDto: ProductDto) => Promise<UpdateResult>;
}
