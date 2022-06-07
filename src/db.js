import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube");

const db = mongoose.connection;

db.on("error", (err) => logError(err));
db.once("open", () => console.log("✅ Ready to connect to database"));
