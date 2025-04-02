import mongoose from 'mongoose';
export class MongoDatabase {
    static async connect(options) {
        const { dbName, mongoUrl } = options;
        try {
            await mongoose.connect(mongoUrl, {
                dbName: dbName,
            });
            console.log('Mongo connected');
            return true;
        }
        catch (error) {
            console.error('Error connecting to MongoDB:', error);
            throw error;
        }
    }
}
