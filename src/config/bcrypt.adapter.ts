import bcrypt from 'bcrypt'

export class BcryptAdapter {
    async hash( password: string ): Promise<string> {
        return bcrypt.hash(password, 12)
    }

    async compare( password: string, hashedPassword: string ): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword)
    }
}