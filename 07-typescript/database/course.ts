const { Schema, model } = require('mongoose');

const CourseSchema = new Schema({
    name: { type: String, required: true },
    students: { type: [Schema.Types.ObjectId], ref: 'students' }
}, { collection: 'courses' });

module.exports = model('courses', CourseSchema);