const Student = require('../database/student');
const Course = require('../database/course');
const User = require('../database/user');
const { GraphQLError } = require('graphql');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

function validateContext(resolver) {
    return function (parent, args, context) {
        if (!context.user) {
            throw new GraphQLError("No tienes acceso a este recurso", {
                extensions: {
                    code: "NO_AUTORIZADO",
                    data: {}
                }
            });
        }

        return resolver(parent, args, context);
    }
}

function validateRole(resolver) {
    return validateContext(function (parent, args, context) {
        if (context.user.role !== "admin") {
            throw new GraphQLError("Solo usuarios administradores pueden ejecutar esta mutación");
        }

        return resolver(parent, args, context);
    });
}

module.exports = {
    Query: {
        getCourses() {
            return Course.find({}, { students: 0 }).exec();
        },
        getStudents: validateContext(function () {
            return Student.find().exec();
        }),
        getStudentsByCourse: validateContext(async function (_, { id }) {
            const course = await Course
                .findById(id).populate("students").exec();

            if (!course) {
                throw new GraphQLError(`El curso ${id} no existe`);
            }

            return course.students;
        })
    },
    Mutation: {
        createStudent: validateContext(function (_, { input }) {
            return new Student(input).save();
        }),

        createCourse: validateContext(function (_, { name }) {
            return new Course({ name }).save();
        }),
        addStudent: validateContext(async function (_, { input }) {
            await Course.findByIdAndUpdate(input.courseId, { 
                $push: { students: input.studentId }
            });
            return true;
        }),
        createUser: validateRole(function (_, { input }) {
            return new User({
                ...input,
                password: md5(input.password)
            }).save();
        }),
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