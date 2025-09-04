const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// Créer un nouveau feedback
router.post('/', async (req, res) => {
  const feedback = new Feedback(req.body);
  try {
    await feedback.save();
    res.status(201).send(feedback);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Récupérer tous les feedbacks
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.send(feedbacks);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;