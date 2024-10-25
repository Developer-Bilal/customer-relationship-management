import express from "express";
import mongoose from "mongoose";
import UserRouter from "./routes/UserRoute";
import { config } from "dotenv";
config();

const app = express();
const port = process.env.PORT || 5555;

app.use(express.json());

app.use("/users", UserRouter);

const start = async () => {
  const connectedDB = await mongoose.connect(process.env.MONGO_URI);

  if (!connectedDB) {
    console.log("Connection error");
  }
  console.log("Coonected to DB");
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

start();
