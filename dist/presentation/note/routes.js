import { Router } from "express";
import { NoteController } from "./controller.js";
export class NoteRoutes {
    static get routes() {
        const router = Router();
        const controller = new NoteController();
        router.post('/create', controller.createNote);
        return router;
    }
}
