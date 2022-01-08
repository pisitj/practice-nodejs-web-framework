import { CreateUserDto } from './dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getHello(): string;
    getUser(userId: string): string;
    createUser(createUserBody: CreateUserDto): string;
}
