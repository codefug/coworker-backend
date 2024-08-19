import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { MONGO_URI } = process.env;

if (!MONGO_URI) {
  throw Error("MONGO_URI is not defined");
}

const connectDB = async () => {
  try {
    const conn = await mongoose
      .connect(MONGO_URI)
      .then(() => console.log("Successfully connected to mongodb"))
      .catch((e) => console.error(e));
  } catch (e) {
    console.error(e);
  }
};

export default connectDB;
