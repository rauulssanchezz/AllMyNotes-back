import express from 'express'

interface Options {
    port: number,
    routes: express.Router
}

export class Server {
    app = express()
    port: number
    routes: express.Router

    public constructor(options: Options) {
        const { port = 3000, routes } = options
        this.port = port
        this.routes = routes
    }

    public async start() {

        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(this.routes)

        this.app.listen(this.port, () => {
            console.log(`Server running on port: ${this.port}`)
        })
    }
}