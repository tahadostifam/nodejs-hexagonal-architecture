import Database from "../Infrastructure/Database";

import UserService from "../Application/Services/User/UserService";
import UserRepository from "../Adapters/Secondary/UserRepository";
import { container } from "../Utils/DependencyInjectionContainer";

const db = new Database().getInstance();
container.set("infra.database", db);

function bootstrapServices() {
    const userRepo = new UserRepository(db);
    container.set("repo.user", userRepo);

    const userService = new UserService();
    container.set("service.user", userService);
}

export { bootstrapServices };
