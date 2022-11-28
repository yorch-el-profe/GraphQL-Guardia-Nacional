const Student = require('../database/student');
const Course = require('../database/course');

module.exports = {
    Query: {
        getCourses() {
            return Course.find().populate("students").exec();
        },
        getStudents() {
            return Student.find().exec();
        }
    },
    Mutation: {
        createStudent(_, { input }) {
            return new Student(input).save();
        },

        createCourse(_, { name }) {
            return new Course({ name }).save();
        }
    }
}