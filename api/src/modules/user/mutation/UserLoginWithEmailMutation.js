import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import { generateToken } from "../../../auth";

export default mutationWithClientMutationId({
  name: "UserLoginWithEmail",
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  outputFields: {
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error
    }
  },
  mutateAndGetPayload: async ({ email, password }, context) => {
    const { database } = context;
    const userData = await database.userDataByEmailAndPassword({
      email,
      password
    });
    if (!userData) {
      return { error: "Email and/or password invalid." };
    }

    return { token: generateToken(userData) };
  }
});
