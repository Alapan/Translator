import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs } from '../../api/schemas';
import { resolvers } from '../../api/resolvers';
import { NextRequest } from 'next/server';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

export default startServerAndCreateNextHandler<NextRequest>(apolloServer);
