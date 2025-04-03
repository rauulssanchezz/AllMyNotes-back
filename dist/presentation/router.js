import { AuthRoutes } from "./auth/routes.js";
import { Router } from "express";
import { NoteRoutes } from "./note/routes.js";
export class AppRoutes {
    static get routes() {
        const router = Router();
        router.use('/auth', AuthRoutes.routes);
        router.use('/note', NoteRoutes.routes);
        return router;
    }
}
