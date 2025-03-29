
import express from 'express'
import { RegisterUserDto } from '../../domain/dto/register-user.dto.ts'
import { BcryptAdapter } from '../../config/index.ts';


export class AuthController {

    registerUser = async (req: express.Request, res: express.Response) => {
        const { name, email, password } = req.body;

        const hashPassword = await BcryptAdapter.hash(password)

        const newUser = RegisterUserDto.create({
            name: name,
            email: email,
            password: hashPassword
        })

        res.json({
            data: {
                newUser
            }
        })
    }

}