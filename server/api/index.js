const router = require('express').Router();

router.get('/', function (req, res, next) {
  res.send('HI!!')
})

module.exports = router;