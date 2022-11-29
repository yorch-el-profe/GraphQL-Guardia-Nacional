const Student = require('../database/student');
const Course = require('../database/course');
const { GraphQLError } = require('graphql');

module.exports = {
    Query: {
        getCourses() {
            return Course.find({}, { students: 0 }).exec();
        },
        getStudents() {
            return Student.find().exec();
        },
        async getStudentsByCourse(_, { id }) {
            const course = await Course
                .findById(id).populate("students").exec();

            if (!course) {
                throw new GraphQLError(`El curso ${id} no existe`);
            }

            return course.students;
        }
    },
    Mutation: {
        createStudent(_, { input }) {
            return new Student(input).save();
        },

        createCourse(_, { name }) {
            return new Course({ name }).save();
        },
        async addStudent(_, { input }) {
            await Course.findByIdAndUpdate(input.courseId, { 
                $push: { students: input.studentId }
            });
            return true;
        }
    }
}