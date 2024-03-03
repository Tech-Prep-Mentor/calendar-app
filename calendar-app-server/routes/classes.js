const express = require('express');
const Class = require('../models/Class'); // Make sure to use a different name if Class is a reserved word in your context
const router = express.Router();

// Create a new class within a semester
router.post('/', async (req, res) => {
  try {
    const newClass = new Class(req.body);
    const savedClass = await newClass.save();
    res.status(201).json(savedClass);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get classes by semester
router.get('/semester/:semesterId', async (req, res) => {
  try {
    const classes = await Class.find({ semester: req.params.semesterId });
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
