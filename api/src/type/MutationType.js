import { GraphQLObjectType } from "graphql";

import UserMutations from "../modules/user/mutation";

export default new GraphQLObjectType({
  name: "Mutation",
  description: "The root of all mutations",
  fields: () => ({
    ...UserMutations
  })
});
