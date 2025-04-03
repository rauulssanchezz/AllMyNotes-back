import { Router } from "express";
import { NoteController } from "./controller.ts";

export class NoteRoutes {

    public static get routes() {

        const router: Router = Router()

        const controller = new NoteController()
        router.post('/create', controller.createNote)

        return router
    }

}