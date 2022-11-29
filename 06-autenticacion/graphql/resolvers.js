const Student = require('../database/student');
const Course = require('../database/course');
const User = require('../database/user');
const { GraphQLError } = require('graphql');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

module.exports = {
    Query: {
        getCourses() {
            return Course.find({}, { students: 0 }).exec();
        },
        getStudents(parent, args, context) {
            if (!context.user) {
                throw new GraphQLError("No tienes acceso a este recurso");
            }
            
            return Student.find().exec();
        },
        async getStudentsByCourse(_, { id }, context) {
            if (!context.user) {
                throw new GraphQLError("No tienes acceso a este recurso");
            }

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
        },
        createUser(_, { input }) {
            return new User({
                ...input,
                password: md5(input.password)
            }).save();
        },
        async authenticate(_, { input }) {
            const user = await User
                .findOne({ email: input.email }).exec();

            if (!user) {
                throw new GraphQLError("Correo electrónico o contraseña incorrecto");
            }

            if (user.password !== md5(input.password)) {
                throw new GraphQLError("Correo electrónico o contraseña incorrecto");
            }

            const { _id, role } = user;
            return jwt.sign({ _id, role }, process.env.JWT_SECRET);
        }
    }
}