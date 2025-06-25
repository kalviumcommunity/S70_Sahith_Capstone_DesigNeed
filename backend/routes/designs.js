const express = require('express');
const router = express.Router();
const Design = require('../models/design'); // Correct path to your model

// GET all designs
router.get('/', async (req, res) => {
  try {
    const designs = await Design.find();
    res.status(200).json(designs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
