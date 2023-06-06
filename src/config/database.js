import 'dotenv/config';
import mongoose from 'mongoose';

const dataBase = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log(`Database connecting 🚀`);
    } catch (error) {
        console.error(`Error connecting to database ${error.message}`);
    }
}

export default dataBase;