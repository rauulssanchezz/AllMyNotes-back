import { Server } from "./presentation/server.ts"
import { AppRoutes } from "./presentation/router.ts"

(() => {
    main()
})()

async function main() {
    
    new Server({
        port: 3000,
        routes: AppRoutes.routes
    }).start()

}