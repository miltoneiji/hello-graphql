import React from "react";
import PropTypes from "prop-types";
import { graphql, QueryRenderer } from "react-relay";

import environment from "../../Environment";
import Authentication from "../../features/Authentication";
import Home from "./Home";

class HomeScreen extends React.Component {
  render() {
    const query = graphql`
      query HomeScreenQuery {
        me {
          ...Home_user
        }
      }
    `;

    return (
      <QueryRenderer
        environment={environment}
        query={query}
        render={({ error, props }) => {
          if (error) {
            return <div>Error</div>;
          } else if (!props) {
            return <div>Loading</div>;
          } else {
            return <Home user={props.me} onLogout={Authentication.logout} />;
          }
        }}
      />
    );
  }
}

export default HomeScreen;
