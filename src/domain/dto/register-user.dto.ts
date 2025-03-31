
import { Validators } from "../../config/index.js";
import { UserEntity } from "../entities/userEntity.js";

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
            'User created',
            new RegisterUserDto(name, email, password)
        ];
    }
}