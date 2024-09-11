export interface User {
    id: number;
    fullName: string;
    email: string;
    passwordHash: string;
    createdAt: Date;
}
