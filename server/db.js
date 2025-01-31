const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected")
    }
    catch {
        console.error("Database failed to connect")
        process.exit(1);
    }
}

module.exports = connection;