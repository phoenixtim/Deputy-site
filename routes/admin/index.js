const router = require('express').Router();

router.get('/*', (req, res) => {
  if (__env === 'production') {
    res.sendFile(__base + 'routes/admin/admin_prod.html');
  } else {
    res.sendFile(__base + 'routes/admin/admin.html');
  }
});

module.exports = router;
