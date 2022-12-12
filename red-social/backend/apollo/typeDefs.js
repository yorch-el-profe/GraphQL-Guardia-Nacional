module.exports = `
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Post {
    _id: ID!
    content: String!
    likes: Int!
    author: User!
  }

  input NewUser {
    username: String!
    email: String!
    password: String!
  }

  type Query {
    getPostsByUserId(userId: ID!): [Post!]!
  }

  type Mutation {
    createUser(input: NewUser): User!
  }
`;
