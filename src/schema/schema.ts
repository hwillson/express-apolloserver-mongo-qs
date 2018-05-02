const { makeExecutableSchema } = require('graphql-tools');

import {
  typeDef as scalarTypeDef,
  resolvers as scalarResolvers,
} from './scalars';

import {
  typeDef as widgetTypeDef,
  resolvers as widgetResolvers,
} from './widget';

const query = `
  type Query {
    _empty: String
  }
`;

const resolvers = {};

const schema = makeExecutableSchema({
  typeDefs: [query, scalarTypeDef, widgetTypeDef],
  resolvers: Object.assign(resolvers, scalarResolvers, widgetResolvers),
});

export default schema;
