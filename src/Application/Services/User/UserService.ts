import { container } from "../../../Utils/DependencyInjectionContainer";
import { UserApi, UserRepository } from "../../../Ports/User";
import { InvalidEmailOrUsernameError } from "./UserErrors";
import bcrypt from "bcrypt";
import { User } from "../../Domains/User";
import { Validator } from "node-input-validator";

class UserService implements UserApi {
    private repo: UserRepository = container.get("repo.user");

    public login(email: string, password: string): Promise<User> {
        return new Promise((resolve, reject) => {
            this.repo
                .findByEmail(email)
                .then(async (user) => {
                    if (user) {
                        const isValid = await bcrypt.compare(password, user.passwordHash);

                        if (!isValid) {
                            reject(new InvalidEmailOrUsernameError());
                            return;
                        }

                        resolve(user);
                        return;
                    }

                    reject(new InvalidEmailOrUsernameError());
                })
                .catch(reject);
        });
    }

    public register(fullName: string, email: string, password: string): Promise<User> {
        return new Promise((resolve, reject) => {
            const passwordHash = bcrypt.hashSync(password, 10);

            this.repo.create(fullName, email, passwordHash).then(resolve).catch(reject);
        });
    }
}

export default UserService;
