import dotenv from 'dotenv';

dotenv.config();

export const env = {
  baseURL: process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com',
  username: process.env.ORANGEHRM_USERNAME || 'Admin',
  password: process.env.ORANGEHRM_PASSWORD || 'admin123'
};


/*
 dotenv is an npm package that helps us manage environment variables.
dotenv.config() reads the .env file from your project directory and loads
its  environment variables (key-value pairs) into process.env.
*/