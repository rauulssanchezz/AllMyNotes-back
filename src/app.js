import { Server } from "./presentation/server.js"
import { AuthRoutes } from "./presentation/auth/routes.js"

(() => {
    main()
})()

async function main() {
    
    new Server({
        port: 3000,
        routes: AuthRoutes.routes
    }).start()

}