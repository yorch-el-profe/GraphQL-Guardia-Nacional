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
        students: [Student]
    }

    input NewStudent {
        name: String!
        lastName: String!
        email: String!
    }

    type Query {
        getCourses: [Course]
        getStudents: [Student]
    }

    type Mutation {
        createStudent(input: NewStudent!): Student!
        createCourse(name: String!): Course!
    }
`;