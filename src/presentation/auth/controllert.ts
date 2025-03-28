
import express from 'express';
import { RegisterUserDto } from '../../domain/dto/register-user.dto.ts';


export class AuthController {

    registerUser = (req: express.Request, res: express.Response) => {
        const { name, email, password } = req.body;

        const newUser = RegisterUserDto.create({
            name,
            email,
            password
        })

        res.json({
            data: {
                newUser
            }
        })
    }

}