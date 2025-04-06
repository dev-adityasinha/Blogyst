import express from "express";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv()

const PORT = process.env.PORT;

const app = express();

mongoose.connect(process.env.MONGO_URI)

app.get("/", (req, res) => {
    res.send("Hello")
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});