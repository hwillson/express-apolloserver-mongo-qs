"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const logger_1 = __importDefault(require("./utilities/logger"));
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const schema_1 = __importDefault(require("./schema/schema"));
const app = express_1.default();
app.use('/graphql', body_parser_1.default.json(), graphqlExpress({ schema: schema_1.default }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
const SERVER_PORT = 3000;
app.listen(SERVER_PORT, () => {
    logger_1.default.info(`Server ready on port ${SERVER_PORT}.`);
});
//# sourceMappingURL=index.js.map