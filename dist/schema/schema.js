"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { makeExecutableSchema } = require('graphql-tools');
const scalars_1 = require("./scalars");
const widget_1 = require("./widget");
const query = `
  type Query {
    _empty: String
  }
`;
const resolvers = {};
const schema = makeExecutableSchema({
    typeDefs: [query, scalars_1.typeDef, widget_1.typeDef],
    resolvers: Object.assign(resolvers, scalars_1.resolvers, widget_1.resolvers),
});
exports.default = schema;
//# sourceMappingURL=schema.js.map