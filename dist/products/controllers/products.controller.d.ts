import { ProductsService } from "../services/products.service";
import { ProductDto } from "../dto/product.model";
import { DeleteResult, UpdateResult } from "typeorm";
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    addProducts(product: ProductDto): Promise<ProductDto>;
    getProducts(): Promise<ProductDto[]>;
    getProductById(id: string): Promise<ProductDto>;
    deleteProduct(id: string): Promise<DeleteResult>;
    update(id: string, productDto: ProductDto): Promise<UpdateResult>;
}
