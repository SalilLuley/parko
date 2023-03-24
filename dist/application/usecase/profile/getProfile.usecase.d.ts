import { ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from "src/infrastructure/controller/app/dto";
export declare class GetProfile {
    protected validationPipe: ValidationPipe;
    constructor();
    execute(createUserDto: CreateUserDto): Promise<any>;
}
