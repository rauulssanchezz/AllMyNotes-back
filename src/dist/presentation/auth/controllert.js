import { RegisterUserDto } from '../../domain/dto/register-user.dto.js';
import { BcryptAdapter } from '../../config/index.js';
export class AuthController {
    constructor() {
        this.registerUser = async (req, res) => {
            const { name, email, password } = req.body;
            const hashPassword = await BcryptAdapter.hash(password);
            const newUser = RegisterUserDto.create({
                name: name,
                email: email,
                password: hashPassword
            });
            res.json({
                data: {
                    newUser
                }
            });
        };
    }
}
