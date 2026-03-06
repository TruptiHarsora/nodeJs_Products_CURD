require("dotenv").config();

module.exports={
    PORT:process.env.PORT,
    DB_URL:process.env.DB_URL,
    DB_NAME:process.env.DB_NAME,
    FRONTEND_ORIGIN: process.env.FRONTEND_ORIGIN,
    API_SECRET: process.env.API_SECRET,
    API_KEY:process.env.API_KEY,
    CLOUD_NAME:process.env.CLOUD_NAME

};