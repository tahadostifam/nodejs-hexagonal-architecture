import { PrismaClient } from "@prisma/client";
import { container } from "../../Utils/DependencyInjectionContainer";

class Database {
    private static instance: PrismaClient;

    public static getInstance() {
        if (Database.instance) {
            return Database.instance;
        }

        Database.instance = new PrismaClient();
        return Database.instance;
    }
}

export default Database;
