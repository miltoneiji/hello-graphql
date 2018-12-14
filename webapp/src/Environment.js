import { Environment, Network, RecordSource, Store } from "relay-runtime";

import config from "../config";

const fetchQuery = (operation, variables) => {
  return fetch(config.graphql_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.jwt || "" // TODO: stop using localStorage
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
};

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export default environment;
