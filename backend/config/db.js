const mongoose = require("mongoose");
const { DB_URL, DB_NAME } = require("./config");

async function connectDB(){
    try {
        const connection = await mongoose.connect(`${DB_URL}/${DB_NAME}`);
        console.log("Database Connect sucessfully");
        return true;
    } catch (error) {
        console.log("Error from Database: ", error.message);
        return false;
    }
}

module.exports = {connectDB};
