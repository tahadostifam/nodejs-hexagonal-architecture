export class InvalidEmailOrUsernameError extends Error {
    constructor() {
        super();
        this.message = "invalid email or username";
    }
}
