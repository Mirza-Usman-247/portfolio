import mongoose from "mongoose";

const MONGO_URL = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

if (!MONGO_URL) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

export const dbconnect = async () => {
  try {
    console.log("Connection String:", MONGO_URL);
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to MongoDB");
      return;
    }
    console.log(MONGO_URL);
    await mongoose.connect(MONGO_URL, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("Successfully connected to the MongoDB server");
  } catch (error) {
    console.error("Error while connecting to the database:", error);
    throw error;
  }
};
