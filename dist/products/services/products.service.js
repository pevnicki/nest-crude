"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ProductRepository_1 = require("../repositories/ProductRepository");
let ProductsService = class ProductsService {
    constructor(productRepo) {
        this.productRepo = productRepo;
        this.insertProduct = async (product) => {
            return await this.productRepo.saveProduct(product);
        };
        this.getAllProducts = async () => {
            return await this.productRepo.getProducts();
        };
        this.getProductById = async (id) => {
            return await this.productRepo.getProductById(id);
        };
        this.deleteProduct = async (id) => {
            return await this.productRepo.deleteProduct(id);
        };
        this.updateProduct = async (id, productDto) => {
            return await this.productRepo.updateProduct(id, productDto);
        };
    }
};
ProductsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(ProductRepository_1.ProductRepository)),
    __metadata("design:paramtypes", [ProductRepository_1.ProductRepository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map