import { AuthController } from './controller'
import { Router } from 'express'

export class AuthRoutes {

    static get routes() {

        const router = Router()

        const controller = AuthController()
        router.post('/register', controller.registerUser)

        return router
    }

}