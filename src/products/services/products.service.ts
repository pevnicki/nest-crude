import {Injectable, NotFoundException} from "@nestjs/common";
import {ProductDto} from "../dto/product.model";
import {InjectRepository} from "@nestjs/typeorm";
import {ProductRepository} from "../repositories/ProductRepository";
import {DeleteResult, UpdateResult} from "typeorm";

@Injectable()
export class ProductsService {

    constructor(@InjectRepository(ProductRepository) private readonly productRepo: ProductRepository) {
    }

    insertProduct = async (product: ProductDto): Promise<ProductDto> => {
        return await this.productRepo.saveProduct(product);
    }

    getAllProducts = async (): Promise<ProductDto[]> => {
        return await this.productRepo.getProducts();
    }

    getProductById = async (id: number): Promise<ProductDto> => {
        return await this.productRepo.getProductById(id);
    }

    deleteProduct = async (id: number):Promise<DeleteResult> => {
        return await this.productRepo.deleteProduct(id);
    }
    updateProduct = async (id:number, productDto: ProductDto): Promise<UpdateResult> => {
        return await this.productRepo.updateProduct(id,productDto);
}
}
