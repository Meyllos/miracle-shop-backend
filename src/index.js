import 'regenerator-runtime';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express(); // setup express application

app.use(cors());
app.use(logger('dev'));

const port = 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to Miracle Shop APIs',
}));

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});

export default app;
