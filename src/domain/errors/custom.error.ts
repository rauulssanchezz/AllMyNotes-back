
export class CustomError extends Error {
    statusCode: number

    public constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
    }

    static badRequest(message: string) {
        return new CustomError(400, message);
    }

    static unathorized(message: string) {
        return new CustomError(401, message);
    }

    static forbidden(message: string) {
        return new CustomError(403, message);
    }

    static notFound(message: string) {
        return new CustomError(404, message);
    }

    static internalServer(message: string = 'Internal Server Error') {
        return new CustomError(500, message);
    }
}