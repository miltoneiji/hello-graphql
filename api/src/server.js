import express from 'express';
import graphQLHTTP from 'express-graphql';
import cors from 'cors';
import { buildSchema } from 'graphql';

import config from './config.js';

const app = express();
app.use(cors());

const monsters = [
  {
    id: 'monsters_1',
    name: 'Cyclops',
    hp: 260,
    exp: 150,
  },
  {
    id: 'monsters_2',
    name: 'Dwarf',
    hp: 90,
    exp: 45,
  },
  {
    id: 'monsters_3',
    name: 'Minotaur',
    hp: 100,
    exp: 50,
  }
];

const schema = buildSchema(`
  type Query {
    monsters: [Monster]
  }

  type Monster {
    id: ID!
    name: String!
    hp: Int!
    exp: Int!
  }
`);

const rootValue = {
  monsters: () => monsters,
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
