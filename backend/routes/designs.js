const express = require('express');
const router = express.Router();
const Design = require('../models/design'); // Path to your Mongoose model

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
  const { title, imageURL, description, category, materialInfo } = req.body;

  const newDesign = new Design({
    title,
    imageURL,
    description,
    category,
    materialInfo
  });

  try {
    const savedDesign = await newDesign.save();
    res.status(201).json(savedDesign);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
