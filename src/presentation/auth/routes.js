import { AuthController } from './controller.js'
import { Router } from 'express'

export class AuthRoutes {

    static get routes() {

        const router = Router()

        const controller = new AuthController()
        router.post('/register', controller.registerUser)

        return router
    }

}