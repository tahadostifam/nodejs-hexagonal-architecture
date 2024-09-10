import Database from "./Infrastructure/Database";

const prisma = Database.getInstance();

// // prisma.user.create({ data: { email: "mr.tahadostifam@gmail.com", fullName: "taha", passwordHash: "12345" } }).then((user) => {
// //     console.log(user);
// // });

// prisma.user.findMany().then((user) => {
//     console.log(user);
// });
