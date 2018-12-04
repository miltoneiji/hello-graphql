import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../Environment';

const query = graphql`
  query AppQuery {
    monsters {
      id
      name
    }
  }
`;

const App = () => (
  <QueryRenderer
    environment={environment}
    query={query}
    render={({ error, props }) => {
      if (error) {
        return <div>Error</div>;
      } else if (!props) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
            {props.monsters.map(monster => <div key={monster.id}>{monster.name}</div>)}
          </div>
        );
      }
    }}
  />
);

export default App;
