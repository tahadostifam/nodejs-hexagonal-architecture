class NotFoundError extends Error {
    constructor() {
        super();
        this.name = "NotFound";
        this.message = "not found";
    }
}
