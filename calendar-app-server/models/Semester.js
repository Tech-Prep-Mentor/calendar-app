const mongoose = require('mongoose');

const semesterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }],
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }]
});

module.exports = mongoose.model('Semester', semesterSchema);
