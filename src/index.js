import 'regenerator-runtime';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import session from 'express-session';
import express_graphql from "express-graphql";
import { schema } from "./schema/schema";
import {signup, login, getAllUsers} from './resolvers/User';
import config from './db/config/envirnoment';

//Root resolver
let root = {
  message: () => 'Welcome to Miracle Shop APIs!',
  signup: signup,
  login,
  getAllUsers
}
const app = express(); // setup express application

app.use(cors());
app.use(logger('dev'));

app.use(session({
  secret: config.secret,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}));


// Create an express server and a GraphQL endpoint
app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql:true
}));

app.listen(config.port, () => {
  console.log(`Server running at http://127.0.0.1:${config.port}/graphql`);
});

export default app;
