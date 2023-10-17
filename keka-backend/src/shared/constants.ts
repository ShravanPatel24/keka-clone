import * as dotenv from 'dotenv';
dotenv.config();
export const jwtConstants = {
    secret: process.env.JWT_SECRET,
  };
  console.log("hello", process.env.JWT_SECRET);