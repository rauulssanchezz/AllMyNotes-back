
import { JsonWebTokenAdapter, Validators } from "../../config/index.ts";
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

    public static async create(object: UserEntity) {
        const { name, email, password } = object;

        const token: string|null = await JsonWebTokenAdapter.signToken({
                                                                    email: email,
                                                                    password: password
                                                                }, 
                                                                    7200
                                                                )

        if (!name) return ['Name is required'];
        if (!email) return ['Email is required'];
        if (!Validators.email.test(email)) return ['Invalid email'];
        if (!password) return ['Password is required'];
        if (password.length < 6) return ['Password is too short'];

        return [
            `token: ${token}`,
            new RegisterUserDto(name, email, password)
        ];
    }
}