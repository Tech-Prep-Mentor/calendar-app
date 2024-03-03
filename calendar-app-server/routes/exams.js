const express = require('express');
const Class = require('../models/Exam'); // Make sure to use a different name if Class is a reserved word in your context
const router = express.Router();

// Create a new exam within a semester
router.post('/', async (req, res) => {
  try {
    const newExam = new Class(req.body);
    const savedExam = await newExam.save();
    res.status(201).json(savedExam);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get exams by semester
router.get('/semester/:semesterId', async (req, res) => {
  try {
    const exams = await Exam.find({ semester: req.params.semesterId });
    res.json(exams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
