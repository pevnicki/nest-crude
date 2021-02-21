import {Module} from '@nestjs/common';
import {ProductsModule} from "./products/products.module";
import {TypeOrmModule} from "@nestjs/typeorm/dist/typeorm.module";
import {UserModule} from "./user/user.module";

@Module({
    imports: [ProductsModule, UserModule,TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'admin',
        database: 'postgres',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        migrations: ['migrations/*.ts'],
    })],
    controllers: [],
    providers: [],
})
export class AppModule {
}
