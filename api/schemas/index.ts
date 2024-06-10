import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    translateString(sourceStr: String!, destinationLangCode: String!): String
  }
`;
