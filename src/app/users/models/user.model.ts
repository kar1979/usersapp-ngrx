export class User {
    public id: number;
    public name: string;
    public status: boolean;
    constructor(name: string) {
        this.name = name;
        this.id = Math.random();
        this.status = false;
    }
}