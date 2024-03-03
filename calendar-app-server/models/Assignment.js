const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: { type: Date, required: true },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  
});

module.exports = mongoose.model('Assignment', assignmentSchema);
