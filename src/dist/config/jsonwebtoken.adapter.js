import jsonwebtoken from 'jsonwebtoken';
import { CustomError } from '../domain/errors/custom.error.js';
const secret = process.env.JWT_SEED;
export class JsonWebTokenAdapter {
    static async signToken(payload, duration) {
        if (!secret)
            throw CustomError.internalServer('Error registering user');
        return new Promise((resolve) => {
            jsonwebtoken.sign(payload, secret, { expiresIn: duration }, (err, token) => {
                if (err)
                    return resolve(err.message);
                resolve(token);
            });
        });
    }
    static async validateToken(token) {
        if (!secret)
            throw CustomError.internalServer('Error loging user');
        return new Promise((resolve) => {
            jsonwebtoken.verify(token, secret, (err, decoded) => {
                if (err)
                    return resolve(err.message);
                resolve(decoded);
            });
        });
    }
}
