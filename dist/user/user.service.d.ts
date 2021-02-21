import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser(userDto: UserDto): Promise<UserEntity>;
    findUsername(username: string): Promise<UserEntity>;
    findAll(): Promise<any[]>;
}
