import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {ProductsService} from "../services/products.service";
import {ProductDto} from "../dto/product.model";
import {DeleteResult, UpdateResult} from "typeorm";

@Controller('/api/v1/product')
export class ProductsController {

    constructor(private productsService: ProductsService) {
    }

    @Post()
    async addProducts(@Body() product: ProductDto): Promise<ProductDto> {
        return this.productsService.insertProduct(product);
    }

    @Get()
    async getProducts(): Promise<ProductDto[]> {
        return this.productsService.getAllProducts();
    }

    @Get('/:id')
    async getProductById(@Param('id') id: string): Promise<ProductDto> {
        return this.productsService.getProductById(+id);
    }

    @Delete('/:id')
    async deleteProduct(@Param('id') id: string):Promise<DeleteResult> {
        return this.productsService.deleteProduct(+id);
    }
    @Put(':id')
    async update(@Param('id') id: string, @Body() productDto: ProductDto): Promise<UpdateResult> {
        return this.productsService.updateProduct(Number(id),productDto);
    }

}
