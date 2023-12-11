const db = require('../config/db.js');

const express = require('express');
const router = express.Router();

router.post('/api/addShoe', (req, res) => {
  const { brand, model, color, number, price } = req.body;

  if (!brand || !model || !color || !number || !price) {
    return res.status(400).json({ success: false, message: 'Incomplete data' });
  }

  const newShoe = db.addShoe(brand, model, color, number, price);
  res.json({ success: true, message: 'Shoe added successfully', shoe: newShoe });
});

router.get('/api/getShoes', (req, res) => {
  const shoes = db.getShoes();
  res.json(shoes);
});

module.exports = router;
