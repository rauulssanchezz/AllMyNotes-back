import { AuthRoutes } from './auth/routes.js'
import { Router } from "express"

export class AppRoutes {

    public static get routes(): Router {

        const router = Router()

        router.use('/auth', AuthRoutes.routes)

        return router

    }

}