
// db connection logic for mongodb

import mongoose from 'mongoose';

const URL = "mongodb+srv://ahegde2021:ahegde2021@test-database.fsir0kr.mongodb.net/test-db-practice?retryWrites=true&w=majority&appName=test-database";
export const connectDb = async () => {
  try {
    await mongoose.connect(URL);
    console.log('Connected to the database');
  } catch (error) {
    console.log(error);
  }
};