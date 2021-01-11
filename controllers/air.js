const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('air', {airElements: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']});
});

router.get('/gemini', (req, res) => {
  res.render('air/gemini');
});

module.exports = router;