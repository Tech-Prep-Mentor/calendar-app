const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  semester: { type: mongoose.Schema.Types.ObjectId, ref: 'Semester', required: true },
  assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' }],
  exams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exam' }]
});

module.exports = mongoose.model('Class', classSchema);
