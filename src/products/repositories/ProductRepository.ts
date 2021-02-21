import {DeleteResult, EntityRepository, Repository, UpdateResult,getConnection} from "typeorm";
import {ProductEntity} from "../entity/product.entity";
import {ProductDto} from "../dto/product.model";

@EntityRepository(ProductEntity)
export class ProductRepository extends Repository<ProductEntity> {

    saveProduct = async (productDto: ProductDto): Promise<ProductDto> => {
        return await this.save(productDto);
    }

    getProducts = async (): Promise<ProductDto[]> => {
        return await getConnection().getRepository(ProductEntity).find()
    }

    getProductById = async (id: number): Promise<ProductDto> => {
        return await this.findOne(id);
    }

    deleteProduct = async (id: number):Promise<DeleteResult> => {
        return await this.delete(id);
    }

    updateProduct = async (id:number,productDto: ProductDto): Promise<UpdateResult>=>{
        return await this.update(id,productDto)
    }

}
