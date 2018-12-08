import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';

import UserType from '../modules/user/UserType';
import { UserLoader } from '../loader';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries',
  fields: () => ({
    me: {
      type: UserType,
      resolve: (root, args, context) => (
        context.user ? UserLoader.load(context, context.user._id) : null
      ),
    },
  }),
});
