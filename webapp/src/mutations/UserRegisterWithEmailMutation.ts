import { Environment } from 'relay-runtime';
import { commitMutation, graphql } from 'react-relay';

export interface IUserRegisterWithEmailInput {
  name: string;
  email: string;
  password: string;
}

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

const commit = (
  environment: Environment,
  { name, email, password }: IUserRegisterWithEmailInput,
  onCompleted: any, // TODO: fix it
) => {
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
