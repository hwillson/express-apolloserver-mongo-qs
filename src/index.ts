import express from 'express';
import bodyParser from 'body-parser';
import logger from './utilities/logger';

const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

import schema from './schema/schema';

const app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

const SERVER_PORT = 3000;
app.listen(SERVER_PORT, () => {
  logger.info(`Server ready on port ${SERVER_PORT}.`);
});
