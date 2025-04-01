import { AuthRoutes } from './auth/routes.ts'
import { Router } from "express"

export class AppRoutes {

    public static get routes(): Router {

        const router = Router()

        router.use('/auth', AuthRoutes.routes)

        return router

    }

}