const router = require('express').Router();

router.get('*', (req, res) => {
  res.sendFile(__base + 'routes/client/index.html');
});

module.exports = router;
