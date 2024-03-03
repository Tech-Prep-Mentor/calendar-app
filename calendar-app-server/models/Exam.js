const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true }
});

module.exports = mongoose.model('Exam', examSchema);
