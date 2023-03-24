import { CreateUserDto } from "./dto/createUser.dto";
export declare class AppController {
    private container;
    constructor();
    create(createUserDto: CreateUserDto): Promise<void>;
}
