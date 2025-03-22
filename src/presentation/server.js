import express from 'express'

const app = express()

export class Server {
    app = express()
    port
    //routes

    constructor(options) {
        const { port = 3000, routes } = options
        this.port = port
    }

    async start() {

        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        //app.use(routes)

        this.app.listen(this.port, () => {
            console.log(`Server running on port: ${this.port}`)
        })
    }
}