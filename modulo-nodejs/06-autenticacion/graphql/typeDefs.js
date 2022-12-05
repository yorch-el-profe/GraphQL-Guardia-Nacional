module.exports = `
    type Student {
        _id: ID!
        name: String!
        lastName: String!
        email: String!
    }

    type Course {
        _id: ID!
        name: String!
    }

    type User {
        _id: ID!
        email: String!
        role: String!
    }

    input NewUser {
        email: String!
        password: String!
        role: String!
    }

    input NewStudent {
        name: String!
        lastName: String!
        email: String!
    }

    input AddStudent {
        courseId: ID!
        studentId: ID!
    }

    input Credential {
        email: String!
        password: String!
    }

    type Query {
        getCourses: [Course]
        getStudents: [Student]
        getStudentsByCourse(id: ID!): [Student]
    }

    type Mutation {
        createStudent(input: NewStudent!): Student!
        createCourse(name: String!): Course!
        addStudent(input: AddStudent!): Boolean!
        createUser(input: NewUser!): User!
        authenticate(input: Credential!): String!
    }
`;