import express from "express";
import mongoose from "./db/index.mjs";

mongoose.connection.on("open",()=>{
  console.log("MongoDB connected");
})
mongoose.connection.on("error",()=>{
  console.log("Error in connecting MongoDB");
})

const app = express();

const port = 3000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});



