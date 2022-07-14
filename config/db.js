const mongoose = require('mongoose');

/**
 * Database connection
 * @returns {Promise<void>}
 */
const connectDB = async () => {
    try {
        //construct the db connection uri
        const connectionURI = "mongodb+srv://soum:yO0vX1LbUm9Np5sF@cluster0.dtuw4.mongodb.net/?retryWrites=true&w=majority";

        //connect to the mongodb database
        await mongoose.connect(connectionURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log('DB connected');
    } catch (error) {
        //log the database error
        console.log('error=>', error)
    }
};

module.exports = connectDB;
