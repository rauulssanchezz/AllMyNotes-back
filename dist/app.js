import { Server } from "./presentation/server.js";
import { AppRoutes } from "./presentation/router.js";
(() => {
    main();
})();
async function main() {
    new Server({
        port: Number.parseInt(process.env.PORT || '3000'),
        routes: AppRoutes.routes
    }).start();
}
