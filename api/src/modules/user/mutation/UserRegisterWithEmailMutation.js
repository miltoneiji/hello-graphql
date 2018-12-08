import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import { generateToken } from '../../../auth';

export default mutationWithClientMutationId({
  name: 'UserRegisterWithEmail',
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  outputFields: {
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
  mutateAndGetPayload: async ({ name, email, password }, context) => {
    const { database } = context;
    const userData = await database.userDataByEmail(email);
    if (userData) {
      return { error: 'Email already in use' };
    }

    const newUserData = await database.insertUserData({ name, email, password });
    return { token: generateToken(newUserData) };
  },
});
