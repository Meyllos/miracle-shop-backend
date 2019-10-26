import dotenv from 'dotenv';
import { eventNames } from 'cluster';

dotenv.config();

let envConfig = {};
envConfig.db_username = process.env.DATABASE_USERNAME_DEV;
envConfig.db_password = process.env.DATABASE_PASSWORD_DEV;
envConfig.port = process.env.PORT || 4000;
envConfig.database= process.env.DATABASE_URL

envConfig.db_username_test = process.env.DATABASE_USERNAME_TEST;
envConfig.db_password_test = process.env.DATABASE_PASSWORD_TEST;
envConfig.token = process.env.SECRET_JWT_KEY;
envConfig.secret = process.env.SECRET;

export default envConfig;
