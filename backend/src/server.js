const { PORT } = require("../config/config");
const { connectDB } = require("../config/db");
const { app } = require("./app");

async function Start_Server() {
    try {
        const res = connectDB();
        if (res) {
            app.listen(PORT, () => {
                console.log(`Server is running on PORT: ${PORT}`);
            })

        }
    } catch (error) {
        console.log("DB error: ", error.message);
    }
}

Start_Server();
