class Container {
    private bindings = new Map<string, any>();

    set(token: string, instance: any) {
        this.bindings.set(token, instance);
    }

    get(token: string): any {
        return this.bindings.get(token);
    }
}

export const container = new Container();
