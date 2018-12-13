import '@babel/polyfill';
import express from 'express';
import graphQLHTTP from 'express-graphql';
import cors from 'cors';
import { buildSchema } from 'graphql';

import config from './config';
import schema from './schema';
import { InMemoryDatabase } from './database';
import { getUserIdFromToken } from './auth';

const app = express();
app.use(cors());
const database = new InMemoryDatabase();

const graphqlSettingsPerRequest = async req => {
  const userId = getUserIdFromToken(req.headers.authorization);

  return {
    schema,
    graphiql: config.env !== 'production',
    context: {
      user: { _id: userId },
      database,
    }
  };
};

app.all('/', graphQLHTTP(graphqlSettingsPerRequest));

const port = config.port;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
