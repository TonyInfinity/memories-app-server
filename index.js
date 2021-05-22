import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/posts", postRoutes);

const CONNECTION_URL = "mongodb+srv://tonyquach:tonyquach123@cluster0.el4rj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, ({ useNewUrlParser: true, useUnifiedTopology: true }))
    .then(() => app.listen(PORT, () => console.log("Server is running on port 5000")))
    .catch(error => console.log(error.message));

mongoose.set("useFindAndModify", false);