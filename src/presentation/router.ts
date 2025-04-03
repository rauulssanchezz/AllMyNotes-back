import { AuthRoutes } from './auth/routes.ts'
import { Router } from "express"
import { NoteRoutes } from './note/routes.ts'

export class AppRoutes {

    public static get routes(): Router {

        const router = Router()

        router.use('/auth', AuthRoutes.routes)
        router.use('/note', NoteRoutes.routes)

        return router
    }
}