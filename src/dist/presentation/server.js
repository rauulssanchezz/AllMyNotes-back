import express from 'express';
export class Server {
    constructor(options) {
        this.app = express();
        const { port = 3000, routes } = options;
        this.port = port;
        this.routes = routes;
    }
    async start() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(this.routes);
        this.app.listen(this.port, () => {
            console.log(`Server running on port: ${this.port}`);
        });
    }
}
