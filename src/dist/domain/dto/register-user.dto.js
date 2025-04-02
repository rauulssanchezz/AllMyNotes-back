import { JsonWebTokenAdapter, Validators } from "../../config/index.js";
import { UserEntity } from "../entities/userEntity.js";
export class RegisterUserDto {
    name;
    email;
    password;
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static async create(object) {
        const { name, email, password } = object;
        const token = await JsonWebTokenAdapter.signToken({
            email: email,
            password: password
        }, 7200);
        if (!name)
            return ['Name is required'];
        if (!email)
            return ['Email is required'];
        if (!Validators.email.test(email))
            return ['Invalid email'];
        if (!password)
            return ['Password is required'];
        if (password.length < 6)
            return ['Password is too short'];
        return [
            `token: ${token}`,
            new RegisterUserDto(name, email, password)
        ];
    }
}
