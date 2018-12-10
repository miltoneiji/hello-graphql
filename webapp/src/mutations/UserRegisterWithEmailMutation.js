import { commitMutation, graphql } from 'react-relay';

const mutation = graphql`
  mutation UserRegisterWithEmailMutation(
    $input: UserRegisterWithEmailInput!
  ) {
    UserRegisterWithEmailMutation(input: $input) {
      token
      error
    }
  }
`;

const commit = (environment, { name, email, password }, onCompleted) => {
  const variables = {
    input: {
      name,
      email,
      password,
    }
  };

  return commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted,
      onError: err => console.error(`[webapp] RegisterWithEmailMutation.js: ${err}`),
    }
  );
};

export default { commit };
