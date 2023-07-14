import mongoose from "mongoose";

const ConnectDb = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
        .then(() => console.log('MongoDb Connected'))
        .catch((err) => console.log(err));
}

export default ConnectDb;