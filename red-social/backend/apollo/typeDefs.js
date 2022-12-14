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

  input Credentials {
    email: String!
    password: String!
  }

  type Query {
    getMyPosts: [Post!]!
    getUser: User!
    getPosts: [Post!]!
  }

  type Mutation {
    createUser(input: NewUser!): User!
    authenticate(input: Credentials!): String!
    createPost(content: String!): Post!
  }
`;
