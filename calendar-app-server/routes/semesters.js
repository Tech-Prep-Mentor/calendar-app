const express = require('express');
const Semester = require('../models/Semester');
const router = express.Router();

// Create a new semester for a user
router.post('/', async (req, res) => {
  try {
    const newSemester = new Semester(req.body);
    const savedSemester = await newSemester.save();
    res.status(201).json(savedSemester);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get semesters by user
router.get('/user/:userId', async (req, res) => {
  try {
    const semesters = await Semester.find({ user: req.params.userId });
    res.json(semesters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
