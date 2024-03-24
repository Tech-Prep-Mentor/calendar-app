const mongoose = require('mongoose');
// create a Schema for 
const assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: { type: Date, required: true },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  
});
// create a mongoose model name Assignment
module.exports = mongoose.model('Assignment', assignmentSchema);
