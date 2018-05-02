import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import GraphQLObjectId from 'graphql-scalar-objectid';

export const typeDef = `
  scalar Date
  scalar ObjectId
`;

export const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      return value.getTime();
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10);
      }
      return null;
    },
  }),

  ObjectId: GraphQLObjectId,
};
