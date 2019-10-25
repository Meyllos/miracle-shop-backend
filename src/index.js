import 'regenerator-runtime';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';

import express_graphql from "express-graphql";
import { buildSchema } from "graphql";

//GraphQL Schema

let schema =buildSchema(`
  type Query {
    message: String
  }
`);

//Root resolver
let root = {
  message: () => 'Welcome to Miracle Shop APIs!'
}
const app = express(); // setup express application

app.use(cors());
app.use(logger('dev'));

const port = 4000;

// Create an express server and a GraphQL endpoint
app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql:true
}));

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/graphql`);
});

export default app;
