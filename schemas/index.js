const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Author {
    id: ID!
    name: String
    books: [Book]
  }
  type Book {
    id: ID!
    title: String
    author: Author
  }
  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }
  type User {
    id: ID!
    email: String!
    trips: [Launch]!
  }
  type Rocket {
    id: ID!
    name: String
    type: String
  }
  type Query {
    launches: [Launch]!
    launch(id: ID!): Launch
    me: User
  }
  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }
  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }
  enum PatchSize {
    SMALL
    LARGE
  }
`;

module.exports = typeDefs;
