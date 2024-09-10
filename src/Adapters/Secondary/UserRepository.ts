import { PrismaClient } from "@prisma/client";

class UserRepository {
    constructor(private prisma: PrismaClient) {}

    findByEmail(email: string) {
        return new Promise((resolve, reject) => {
            this.prisma.user
                .findFirst({
                    where: {
                        email,
                    },
                })
                .then(resolve)
                .catch(reject);
        });
    }

    findById(id: number) {
        return new Promise((resolve, reject) => {
            this.prisma.user
                .findFirst({
                    where: {
                        id,
                    },
                })
                .then(resolve)
                .catch(reject);
        });
    }

    create(fullName: string, email: string, passwordHash: string) {
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
                .catch(reject);
        });
    }
}

export default UserRepository;
