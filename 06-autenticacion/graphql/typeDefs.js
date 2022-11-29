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

    input NewStudent {
        name: String!
        lastName: String!
        email: String!
    }

    input AddStudent {
        courseId: ID!
        studentId: ID!
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
    }
`;