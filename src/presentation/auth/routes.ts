import { AuthController } from './controllert.ts'
import { Router } from 'express'

export class AuthRoutes {

    public static get routes(): Router {

        const router = Router()

        const controller = new AuthController()
        router.post('/register', controller.registerUser)

        return router
    }

}