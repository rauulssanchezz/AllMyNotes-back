import jsonwebtoken from 'jsonwebtoken'
import { CustomError } from '../domain/errors/custom.error.ts'

const secret = process.env.JWT_SEED

export class JsonWebTokenAdapter {

    static async signToken(payload: Object, duration: number): Promise<string | null> {

        if(!secret) throw CustomError.internalServer('Error registering user')

        return new Promise((resolve) => {

            jsonwebtoken.sign(payload, secret!, { expiresIn: duration }, (err, token) => {
                if(err) return resolve(err.message)

                resolve(token!)
            })

        })

    }

    static async validateToken( token: string ): Promise<jsonwebtoken.JwtPayload | string | null> {
        
        if(!secret) throw CustomError.internalServer('Error loging user')

        return new Promise((resolve) => {

            jsonwebtoken.verify(token, secret, (err, decoded) => {
                if(err) return resolve(err.message)

                resolve(decoded!)
            })

        })
    }

}