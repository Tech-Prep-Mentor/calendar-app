const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');

// POST: Create a new assignment
router.post('/', async (req, res) => {
  const newAssignment = new Assignment(req.body);
  try {
    const savedAssignment = await newAssignment.save();
    res.status(201).json(savedAssignment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET: Fetch all assignments
router.get('/', async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT: Update a class
router.put('/:id', async (req, res) => {
    try {
      const updatedAssignment = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedAssignment);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // DELETE: Delete a class
  router.delete('/:id', async (req, res) => {
    try {
      await Class.findByIdAndDelete(req.params.id);
      res.json({ message: 'Assignment deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;
