const express = require('express');
const router = express.Router();
const Design = require('../models/design');

// GET all designs
router.get('/', async (req, res) => {
  try {
    const designs = await Design.find();
    res.status(200).json(designs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new design
router.post('/', async (req, res) => {
  try {
    const newDesign = new Design(req.body);
    const savedDesign = await newDesign.save();
    res.status(201).json(savedDesign);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ✅ PUT method to update a design by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedDesign = await Design.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedDesign) {
      return res.status(404).json({ message: 'Design not found' });
    }

    res.status(200).json(updatedDesign);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
