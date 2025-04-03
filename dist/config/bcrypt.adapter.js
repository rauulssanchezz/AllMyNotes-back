import bcrypt from 'bcrypt';
export class BcryptAdapter {
    static async hash(password) {
        return bcrypt.hash(password, 12);
    }
    static async compare(password, hashedPassword) {
        return bcrypt.compare(password, hashedPassword);
    }
}
