export declare class UserEntity {
    id: number;
    username: string;
    password: string;
    hashPassword(): Promise<void>;
}
