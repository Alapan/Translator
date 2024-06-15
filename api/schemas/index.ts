import gql from 'graphql-tag';

export const typeDefs = gql`
  type LanguageCode {
    code: String!
    name: String!
  }

  type Query {
    translateString(sourceStr: String!, destinationLangCode: String!): String,
    getLanguageCodes: [LanguageCode!]!
  }
`;
