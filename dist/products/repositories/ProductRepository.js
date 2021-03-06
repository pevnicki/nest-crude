"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("../entity/product.entity");
let ProductRepository = class ProductRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.saveProduct = async (productDto) => {
            return await this.save(productDto);
        };
        this.getProducts = async () => {
            return await typeorm_1.getConnection().getRepository(product_entity_1.ProductEntity).find();
        };
        this.getProductById = async (id) => {
            return await this.findOne(id);
        };
        this.deleteProduct = async (id) => {
            return await this.delete(id);
        };
        this.updateProduct = async (id, productDto) => {
            return await this.update(id, productDto);
        };
    }
};
ProductRepository = __decorate([
    typeorm_1.EntityRepository(product_entity_1.ProductEntity)
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=ProductRepository.js.map