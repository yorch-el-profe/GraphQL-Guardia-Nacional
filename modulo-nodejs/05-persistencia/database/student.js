const { Schema, model } = require('mongoose');

const StudentSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true }
}, { collection: 'students' });

module.exports = model('students', StudentSchema);