import express from 'express';
import graphQLHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import config from './config.js';

const app = express();

const schema = buildSchema(`
  type Query {
    hello: String!
  }
`);

const rootValue = {
  hello: () => 'Hello, graphql',
};

app.get('/', graphQLHTTP({
  rootValue,
  schema,
  graphiql: true,
}));

app.post('/', graphQLHTTP({
  rootValue,
  schema,
  graphiql: false,
}));

const port = config.port;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
