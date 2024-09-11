export class EmailAlreadyTakenError extends Error {
    constructor() {
        super();
        this.message = "email already taken";
    }
}
