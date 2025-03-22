import { Server } from "./presentation/server.js"

(() => {
    main()
})()

async function main() {
    console.log('a')
    new Server({
        port: 3000,
        routes: 'Not implemented'
    }).start()

}