import { gql } from "apollo-server-express";
export const userSchema = gql`
  type User {
    user_id: String!
    is_active: Boolean!
    created_on: String!
    updated_on: String!
  }

  type Query {
    getAllUsers: [User]
    getUserById(id: String!): User!
  }

  input NewUserInput {
    username: String!
    password: String!
  }
  type Mutation {
    createNewUser(newUserData: NewUserInput!): User!
  }
`;
