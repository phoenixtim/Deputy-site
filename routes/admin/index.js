const router = require('express').Router();

router.get('/admin', (req, res) => {
  res.send('There will be admin panel');
});

module.exports = router;
