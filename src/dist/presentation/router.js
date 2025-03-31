import { AuthRoutes } from './auth/routes.js';
import { Router } from "express";
export class AppRoutes {
    static get routes() {
        const router = Router();
        router.use('/auth', AuthRoutes.routes);
        return router;
    }
}
