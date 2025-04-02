import mongoose from 'mongoose'

interface Options {
    mongoUrl: string,
    dbName: string,
    options?: mongoose.ConnectOptions;
}

export class MongoDatabase {

    static async connect(options: Options) {

        const { dbName, mongoUrl } = options

        try {

            await mongoose.connect(mongoUrl, {
                dbName: dbName,
            })

            console.log('Mongo connected')
            return true

        } catch(error) {

            console.error('Error connecting to MongoDB:', error);
            throw error;

        }
    }

}
