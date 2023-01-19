import mongoose from "mongoose";
require('dotenv').config();

// MongoDB connection

mongoose
  .set('strictQuery', false)
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to mongoDB...'))
  .catch((error) => console.log(error))