import { AuthController } from './controller'
import { Router } from 'express'

export class AuthRoutes {

    static getRoutes() {

        const router = Router()

        const controller = AuthController()
        router.post('/register', controller.registerUser)

        return router
    }

}