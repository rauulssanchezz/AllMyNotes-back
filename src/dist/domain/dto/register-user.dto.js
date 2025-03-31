import { Validators } from "../../config/index.js";
export class RegisterUserDto {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static create(object) {
        const { name, email, password } = object;
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
            'User created',
            new RegisterUserDto(name, email, password)
        ];
    }
}
