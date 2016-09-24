const router = require('express').Router();

router.get('*', (req, res) => {
  if (__env === 'production') {
    res.sendFile(__base + 'routes/client/index_prod.html');
  } else {
    res.sendFile(__base + 'routes/client/index.html');
  }
});

module.exports = router;
