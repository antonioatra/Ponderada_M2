const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  res.json({ message: 'Test route working' });
});

// Make sure you export the router
module.exports = router;