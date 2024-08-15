import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
const app = express()
app.use(cors());
app.use(express.json());


dotenv.config();
const PORT = process.env.PORT || 4001;
//const URI =process.env.mongodburl;
// connect to monogdb
const UR=process.env.URL;

try {
  mongoose.connect(UR,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Connection to MongoDb");
  
} catch (error) {
  
}
// Defining Route

app.use(express.json());

app.use("/book" , bookRoute);
app.use("/user", userRoute);
app.listen(PORT, () => {
  console.log(`Server app listening on port ${PORT}`)
})