import { User } from "../Application/Domains/User";

export abstract class UserRepository {
    public abstract findByEmail(email: string): Promise<User>;
    public abstract findById(id: number): Promise<User>;
    public abstract create(fullName: string, email: string, passwordHash: string): Promise<User>;
}

export abstract class UserApi {
    public abstract login(email: string, password: string): Promise<User>;
    public abstract register(fullName: string, email: string, password: string): Promise<User>;
}
