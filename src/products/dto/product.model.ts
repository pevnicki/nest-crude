import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNumber, IsString} from "class-validator";

export class ProductDto{

    @ApiProperty()
    @IsNumber()
    public id: number

    @ApiProperty()
    @IsString()
    readonly title:string

    @ApiProperty()
    @IsBoolean()
    readonly isActive:boolean


    @ApiProperty()
    @IsString()
    readonly description: string;

    @ApiProperty()
    @IsNumber()
    readonly price: number;

    @ApiProperty()
    @IsString()
    readonly unit: string;

}
