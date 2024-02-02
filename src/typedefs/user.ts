import { gql } from "apollo-server-express"
export const typeDefs = gql`

type User {
  firstname: String
  lastname: String
  age: Int
  address: String
}

type Query {
  users:[User]
}

`;