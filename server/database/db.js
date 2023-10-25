
import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://sanket:sanket@cluster0.jww6arp.mongodb.net`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;