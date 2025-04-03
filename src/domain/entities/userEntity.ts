
export class UserEntity {
    private name: string
    private email: string
    private password: string

    public constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}