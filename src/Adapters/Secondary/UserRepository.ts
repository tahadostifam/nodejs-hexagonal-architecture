import { PrismaClient } from "@prisma/client";
import { UserRepository as AbstractUserRepository } from "../../Ports/User";
import { User } from "../../Application/Domains/User";
import { EmailAlreadyTakenError } from "./Errors";

class UserRepository implements AbstractUserRepository {
    constructor(private prisma: PrismaClient) {}

    public findByEmail(email: string): Promise<User> {
        return new Promise((resolve, reject) => {
            this.prisma.user
                .findFirst({
                    where: {
                        email,
                    },
                })
                .then((user) => {
                    resolve(user!);
                })
                .catch(reject);
        });
    }

    public findById(id: number): Promise<User> {
        return new Promise((resolve, reject) => {
            this.prisma.user
                .findFirst({
                    where: {
                        id,
                    },
                })
                .then((user) => {
                    resolve(user!);
                })
                .catch(reject);
        });
    }

    public create(fullName: string, email: string, passwordHash: string): Promise<User> {
        return new Promise(async (resolve, reject) => {
            this.prisma.user
                .create({
                    data: {
                        fullName,
                        email,
                        passwordHash,
                    },
                })
                .then(resolve)
                .catch((e) => {
                    if (e.code == "P2002") {
                        reject(new EmailAlreadyTakenError());
                        return;
                    }

                    reject(e);
                });
        });
    }
}

export default UserRepository;
