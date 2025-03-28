
import { Validators } from "../../config/validators.ts";
import { UserEntity } from "../entities/userEntity.ts";

export class RegisterUserDto {
    private name: string
    private email: string
    private password: string

    private constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public static create(object: UserEntity) {
        const { name, email, password } = object;

        if (!name) return ['Name is required'];
        if (!email) return ['Email is required'];
        if (!Validators.email.test(email)) return ['Invalid email'];
        if (!password) return ['Password is required'];
        if (password.length < 6) return ['Password is too short'];

        return [
            undefined,
            new RegisterUserDto(name, email, password)
        ];
    }
}