import { Environment } from 'relay-runtime';
import { commitMutation, graphql } from 'react-relay';

export interface IUserLoginWithEmailInput {
  email: string;
  password: string;
}

const mutation = graphql`
  mutation UserLoginWithEmailMutation(
    $input: UserLoginWithEmailInput!
  ) {
    UserLoginWithEmailMutation(input: $input) {
      token
      error
    }
  }
`;

const commit = (
  environment: Environment,
  { email, password }: IUserLoginWithEmailInput,
  onCompleted: any, // TODO: fix it
) => {
  const variables = {
    input: {
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
      onError: err => console.log(`[webpackk] UserLoginWithEmailMutation.js: ${err}`),
    }
  );
};

export default { commit };
