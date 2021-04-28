export class User {
    fullname: string;
    email: string;
    password: string;
    hasEmail() {
        return this.email != "";
    }
}
