import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_DB);

const db = mongoose.connection;

db.on("error", (err) => logError(err));
db.once("open", () => console.log("✅ Ready to connect to database"));
