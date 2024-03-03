const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  location: String,
  
});

module.exports = mongoose.model('Event', eventSchema);
