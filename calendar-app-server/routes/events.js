const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// POST: Create a new event
router.post('/', async (req, res) => {
  const newEvent = new Event(req.body);
  try {
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET: Fetch all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT: Update a class
router.put('/:id', async (req, res) => {
    try {
      const updatedEvent = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedEvent);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // DELETE: Delete a class
  router.delete('/:id', async (req, res) => {
    try {
      await Class.findByIdAndDelete(req.params.id);
      res.json({ message: 'Event deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
module.exports = router;
